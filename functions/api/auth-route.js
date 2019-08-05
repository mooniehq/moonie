const express = require('express')
const router = express.Router()

module.exports = function (app, passport) {
  // =====================================
  // LOGOUT ==============================
  // =====================================
  router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  router.get('/login', passport.authenticate('local', { failureRedirect: '/login-fail' },
    // function (req, res) {
    //   res.redirect('/success')
    // }
    )
  )

  return router
}
