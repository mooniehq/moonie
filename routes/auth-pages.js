const { Router } = require('express')
const asyncRoute = require('route-async')
const { createUser } = require('../services/user-service')

module.exports = (passport, nextApp) => {

  const router = Router()

  router.get('/signout', asyncRoute(async (req, res) => {
    await req.logout()
    res.redirect('/')
  }))

  router.post('/api/signin',
    passport.authenticate('local', {
      failureRedirect: '/'
    }),
    (req, res, next) => {
      req.session.save(() => {
        return res.redirect('/')
      })
    })

  router.post('/api/signup', asyncRoute(async ({ body: { email, password } }, res) => {
    await createUser(email, password)
    return res.redirect('/')
  }))

  router.get('/signin', (req, res) => {
    return nextApp.render(req, res, '/signin')
  })

  router.get('/signup', (req, res) => {
    return nextApp.render(req, res, '/signup')
  })

  return router
}
