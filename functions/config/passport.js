const LocalStrategy = require('passport-local').Strategy
const { User } = require('../models')
const { findUser } = require('../services/user-service')

module.exports = (passport) => {
  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({ where: { id } })
    done(null, user)
  })

  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: true,
      passReqToCallback: true
    },
    async ({ body: { subdomain } }, email, password, done) => {
      try {
        const user = await findUser(subdomain, email, password)
        if (!user || !user.validPassword(password)) {
          return done('Email or password is incorrect.', false)
        } else {
          return done(null, user)
        }
      } catch (err) {
        console.error(err)
        return done(err)
      }
    }
  ))
}
