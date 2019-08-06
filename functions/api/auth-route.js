const express = require('express')
const router = express.Router()
// load up the user model
const User = require('../models').user

module.exports = function (app, passport) {
  // =====================================
  // LOGOUT ==============================
  // =====================================
  router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  router.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail' }
    // function (req, res) {
    //   res.redirect('/success')
    // }
  ))

  router.post('/signup', (req, res) => {
    const body = req.body
    const { username, password } = body
    // find the user in the database based on their facebook id
    User.findOne({ where: { email: username } }).then(user => {
      if (!user) {
        return User.create({
          email: username,
          password: password
        }).then(user => res.json(user))
      } else {
        res.json(user)
      }
    }).catch((e) => {
      res.json(e)
    })
  })

  return router
}
