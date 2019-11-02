const { Router } = require('express')
const asyncRoute = require('route-async')
const { Question } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/', asyncRoute(async (req, res) => {
    const { user } = req
    const questions = await Question.findAll()
      .map(question => question.get({ plain: true }))
    return nextApp.render(req, res, '/home', { user, questions })
  }))

  return router
}
