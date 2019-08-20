const { Router } = require('express')
const asyncRoute = require('route-async')
const { createUser } = require('../services/user-service')

module.exports = (passport, nextApp) => {

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

  router.post('/api/signup', asyncRoute(async ({ community, body: { email, password } }, res) => {
    const { user } = await createUser(community, email, password)
    return res.json(user)
  }))

  router.get('/signin', (req, res) => {
    return nextApp.render(req, res, '/community/signin')
  })

  router.get('/signup', (req, res) => {
    return nextApp.render(req, res, '/community/signup')
  })

  return router
}
