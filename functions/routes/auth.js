const { Router } = require('express')
const asyncRoute = require('route-async')
const { createCommunity } = require('../services/community-service')

module.exports = (passport) => {

  const router = Router()

  router.get('/api/signout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  router.post('/api/signin',
    passport.authenticate('local', {
      failureRedirect: '/signin'
    }),
    (req, res, next) => {
      req.session.save(() => {
        return res.send('Success')
      })
    })

  router.post('/api/signup', asyncRoute(async (req, res) => {
    const { subdomain, email, password } = req.body
    const { user } = await createCommunity(subdomain, email, password)
    return res.json(user)
  }))

  return router
}
