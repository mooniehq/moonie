const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { Question, Answer, Comment } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/question/:id', asyncRoute(async (req, res) => {
    const { user } = req
    const { id } = req.params
    const question = await Question.findOne({ where: { id } })
    let answers = []
    if (question) {
      answers = await Answer.findAll({ where: { question_id: id } })
        .map(answer => answer.get({ plain: true }))
        .map(async answer => {
          const comments = await Comment.findAll({ where: { answer_id: answer.id } })
            .map(comment => comment.get({ plain: true }))
          return {
            ...answer,
            comments
          }
        })
    }
    return nextApp.render(req, res, '/question', { user, question, answers })
  }))

  router.get('/ask', isLoggedIn, (req, res) => {
    const { user } = req
    return nextApp.render(req, res, '/ask', { user })
  })

  return router
}
