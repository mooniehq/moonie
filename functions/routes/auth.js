const { Router } = require('express')
const asyncRoute = require('route-async')
const { isCommunity } = require('../middleware/community')
const { createUser } = require('../services/user-service')

module.exports = (passport, nextApp) => {

  const router = Router()

  router.get('/signout', isCommunity, asyncRoute(async (req, res) => {
    await req.logout()
    res.redirect('/')
  }))

  router.post('/api/signin',
    isCommunity,
    passport.authenticate('local', {
      failureRedirect: '/'
    }),
    (req, res, next) => {
      req.session.save(() => {
        return res.redirect('/')
      })
    })

  router.post('/api/signup', isCommunity, asyncRoute(async ({ community, body: { email, password } }, res) => {
    await createUser(community, email, password)
    return res.redirect('/')
  }))

  router.get('/signin', isCommunity, (req, res) => {
    return nextApp.render(req, res, '/community/signin')
  })

  router.get('/signup', isCommunity, (req, res) => {
    return nextApp.render(req, res, '/community/signup')
  })

  return router
}
