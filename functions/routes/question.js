const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { isCommunity } = require('../middleware/community')
const { Question, Answer, Comment } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/question/:id', isCommunity, isLoggedIn, asyncRoute(async (req, res) => {
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
    return nextApp.render(req, res, '/community/question', { question, answers })
  }))

  router.get('/ask', isCommunity, isLoggedIn, (req, res) => {
    return nextApp.render(req, res, '/community/ask')
  })

  return router
}
