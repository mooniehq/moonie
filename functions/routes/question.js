const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { isSite } = require('../middleware/site')
const { Question, Answer, Comment } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/question/:id', isSite, isLoggedIn, asyncRoute(async (req, res) => {
    const { id } = req.params
    const question = await Question.findOne({ where: { id } })
    let answers = []
    if (question) {
      answers = await Answer.findAll({
        where: {
          question_id: question.id
        }
      }).map(answer => answer.get({ plain: true }))

      answers.forEach(async answer => {
        const comments = await Comment.findAll({ where: { answer_id: answer.id } })
          .map(comment => comment.get({ plain: true }))
        answer.comments = comments
      })
    }
    return nextApp.render(req, res, '/site/question', { question, answers })
  }))

  router.get('/ask', isSite, isLoggedIn, (req, res) => {
    return nextApp.render(req, res, '/site/ask')
  })

  return router
}
