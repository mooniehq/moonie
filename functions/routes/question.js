const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { Question, Answer } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/question/:id', asyncRoute(async (req, res) => {
    const { id } = req.params
    const question = await Question.findOne({ where: { id } })
    let answers = []
    if (question) {
      answers = await Answer.findAll({
        where: {
          question_id: question.id
        }
      })
    }
    return nextApp.render(req, res, '/community/question', { question, answers })
  }))

  router.get('/ask', isLoggedIn, (req, res) => {
    return nextApp.render(req, res, '/community/ask')
  })

  router.post('/api/question', isLoggedIn, asyncRoute(async (req, res) => {
    const {
      user: {
        id: author_id,
        community_id
      },
      body: {
        title,
        content
      }
    } = req
    await Question.create({
      title,
      content,
      author_id,
      community_id
    })
    return res.redirect('/ask')
  }))

  router.post('/api/anwser', isLoggedIn, asyncRoute(async (req, res) => {
    const {
      user: {
        id: author_id,
        community_id
      },
      body: {
        questionId,
        content
      }
    } = req
    await Answer.create({
      question_id: questionId,
      content,
      author_id,
      community_id
    })
    return res.redirect('/question/' + questionId)
  }))

  return router
}
