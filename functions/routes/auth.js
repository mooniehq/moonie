const { Router } = require('express')
const asyncRoute = require('route-async')
const { isSite } = require('../middleware/site')
const { createUser } = require('../services/user-service')

module.exports = (passport, nextApp) => {

  const router = Router()

  router.get('/signout', isSite, asyncRoute(async (req, res) => {
    await req.logout()
    res.redirect('/')
  }))

  router.post('/api/signin',
    isSite,
    passport.authenticate('local', {
      failureRedirect: '/'
    }),
    (req, res, next) => {
      req.session.save(() => {
        return res.redirect('/')
      })
    })

  router.post('/api/signup', isSite, asyncRoute(async ({ site, body: { email, password } }, res) => {
    await createUser(site, email, password)
    return res.redirect('/')
  }))

  router.get('/signin', isSite, (req, res) => {
    return nextApp.render(req, res, '/site/signin')
  })

  router.get('/signup', isSite, (req, res) => {
    return nextApp.render(req, res, '/site/signup')
  })

  return router
}
