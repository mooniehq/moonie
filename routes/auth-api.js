const { Router } = require('express')
const asyncRoute = require('route-async')
const { createUser } = require('../services/user-service')

module.exports = (passport) => {

  const router = Router()

  router.post('/api/signin',
    passport.authenticate('local', {
      failureRedirect: '/'
    }),
    (req, res, next) => {
      req.session.save(() => {
        return res.redirect('/')
      })
    })

  router.post('/api/signup', asyncRoute(async (req, res) => {
    const { body: { email, password } } = req
    const user = await createUser(email, password)
    req.login(user, (err) => {
      if (err) {
        console.error('Cannot log user in after signing up', err)
        return res.redirect('/')
      } else {
        return res.redirect('/')
      }
    })
  }))

  return router
}
