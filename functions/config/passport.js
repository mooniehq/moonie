// load all the things we need
const LocalStrategy = require('passport-local').Strategy

// load up the user model
const { sequelize, User } = require('../models')

// load the auth variables
// const configAuth = require('./auth')

module.exports = function (passport) {
  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    return User.findOne({ where: { id } })
      .then(user => done(null, user))
  })

  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: true,
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        const { subdomain } = req.body
        const users = await sequelize.query(
          'select m.* from member m inner join community c on m.community_id = c.id where c.subdomain = :subdomain',
          {
            model: User,
            mapToModel: true,
            replacements: { subdomain },
            type: sequelize.QueryTypes.SELECT
          }
        )
        if (users.length === 0) {
          return done('Email or password is incorrect.', false)
        }
        const user = users[0]
        if (!user.validPassword(password)) {
          return done('Email or password is incorrect.', false)
        }
        return done(null, user)
      } catch (err) {
        console.error(err)
        return done(err)
      }
    }
  ))
}
