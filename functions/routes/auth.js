const { Router } = require('express')
const asyncRoute = require('route-async')
const { createUser } = require('../services/user-service')

module.exports = (passport, nextApp) => {

  const router = Router()

  router.get('/signout', async (req, res) => {
    await req.logout()
    res.redirect('/')
  })

  router.post('/api/signin',
    passport.authenticate('local', {
      failureRedirect: '/'
    }),
    (req, res, next) => {
      req.session.save(() => {
        return res.redirect('/')
      })
    })

  router.post('/api/signup', asyncRoute(async ({ community, body: { email, password } }, res) => {
    const { user } = await createUser(community, email, password)
    return res.redirect('/')
  }))

  router.get('/signin', (req, res) => {
    return nextApp.render(req, res, '/community/signin')
  })

  router.get('/signup', (req, res) => {
    return nextApp.render(req, res, '/community/signup')
  })

  return router
}
