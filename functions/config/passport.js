// config/passport.js

// load all the things we need
// var LocalStrategy = require('passport-local').Strategy;
const LocalStrategy = require('passport-local').Strategy

// load up the user model
const User = require('../models').user

// load the auth variables
// const configAuth = require('./auth')

module.exports = function (passport) {
  passport.use(new LocalStrategy(
    function (username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err) }
        if (!user) { return done(null, false) }
        if (!user.verifyPassword(password)) { return done(null, false) }
        return done(null, user)
      })
    }
  ))
};
