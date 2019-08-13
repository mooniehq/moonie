const { Router } = require('express')
const { Community, User } = require('../models')

module.exports = function (passport) {

  const router = Router()

  router.get('/api/signout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  router.post('/api/signin',
    passport.authenticate('local', {
      failureRedirect: '/signin',
      successRedirect: '/'
    }))

  router.post('/api/signup', async (req, res) => {
    try {
      const { body } = req
      const { subdomain, email, password } = body
      let community = await Community.findOne({ where: { subdomain } })
      if (!community) {
        community = await Community.create({ subdomain })
      }
      let user = await User.findOne({ where: { community_id: community.id, email } })
      if (!user) {
        user = await User.create({
          community_id: community.id,
          email,
          password
        })
      }
      return res.json(user)
    } catch (err) {
      console.error(err)
      res.json(err)
    }
  })

  return router
}
