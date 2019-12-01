const { Router } = require('express')
const asyncRoute = require('route-async')
const { findQuestions } = require('../services/question-service')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/', asyncRoute(async (req, res) => {
    const { user } = req
    const questions = await findQuestions()
    return nextApp.render(req, res, '/home', { user, questions })
  }))

  return router
}
