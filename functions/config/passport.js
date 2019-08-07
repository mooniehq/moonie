// load all the things we need
const LocalStrategy = require('passport-local').Strategy

// load up the user model
const User = require('../models').user

// load the auth variables
// const configAuth = require('./auth')

module.exports = function (passport) {
  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    User.findOne({ id })
      .then(user => done(null, user))
  })

  passport.use(new LocalStrategy(
    function (username, password, done) {
      User.findOne({ email: username }).then((user) => {
        if (!user) {
          return done('Email or password is incorrect.', false)
        }
        if (!user.validPassword(password)) {
          return done('Email or password is incorrect.', false)
        }
        return done(null, user)
      }).catch(err => done(err))
    }
  ))
}
