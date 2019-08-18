const { Router } = require('express')
const { createCommunity } = require('../services/community-service')

module.exports = function (passport) {

  const router = Router()

  router.get('/api/signout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  router.post('/api/signin',
    passport.authenticate('local', {
      failureRedirect: '/signin'
    }),
    function (req, res, next) {
      req.session.save(function () {
        return res.send('Success')
      })
    })

  router.post('/api/signup', async (req, res) => {
    try {
      const { subdomain, email, password } = req.body
      const { user } = await createCommunity(subdomain, email, password)
      return res.json(user)
    } catch (err) {
      res.send(err)
    }
  })

  return router
}
