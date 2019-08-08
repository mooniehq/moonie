const express = require('express')
const router = express.Router()
// load up the user model
const { Community, User } = require('../models')

module.exports = function (app, passport) {

  router.get('/signout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  router.post('/signin',
    passport.authenticate('local', {
      failureRedirect: '/signin',
      successRedirect: '/api/test'
    }))

  router.post('/signup', async (req, res) => {
    try {
      const { body } = req
      const { subdomain, email, password } = body
      let community = await Community.findOne({ where: { subdomain } })
      if (!community) {
        community = await Community.create({ subdomain })
      }
      let user = await User.findOne({ where: { email } })
      if (!user) {
        user = await User.create({
          community_id: community.id,
          email,
          password
        })
      }
      return res.json(user)
    } catch (err) {
      res.json(err)
    }
  })

  return router
}
