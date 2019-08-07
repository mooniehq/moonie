const express = require('express')
const router = express.Router()
// load up the user model
const User = require('../models').user

module.exports = function (app, passport) {

  router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  router.post('/login',
    passport.authenticate('local', {
      failureRedirect: '/login-fail',
      successRedirect: '/api/test'
    }))

  router.post('/signup', (req, res) => {
    const { body } = req
    const { username, password } = body
    // find the user in the database by their username
    User.findOne({ where: { email: username } })
      .then(user => {
        if (!user) {
          return User.create({
            email: username,
            password: password
          }).then(user => res.json(user))
        } else {
          return res.json(user)
        }
      }).catch((e) => {
        return res.json(e)
      })
  })

  return router
}
