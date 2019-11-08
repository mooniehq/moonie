const { Router } = require('express')
const asyncRoute = require('route-async')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/signout', asyncRoute(async (req, res) => {
    await req.logout()
    res.redirect('/')
  }))

  router.get('/signin', (req, res) => {
    return nextApp.render(req, res, '/signin')
  })

  router.get('/signup', (req, res) => {
    return nextApp.render(req, res, '/signup')
  })

  return router
}
