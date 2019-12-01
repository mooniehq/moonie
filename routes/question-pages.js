const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { findFullQuestion } = require('../services/question-service')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/question/:id', asyncRoute(async (req, res) => {
    const { user } = req
    const { id } = req.params
    const question = await findFullQuestion(id)
    return nextApp.render(req, res, '/question', { user, question })
  }))

  router.get('/ask', isLoggedIn, (req, res) => {
    const { user } = req
    return nextApp.render(req, res, '/ask', { user })
  })

  return router
}
