const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { Question, Answer, Comment } = require('../models')

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
      }).map(answer => answer.get({ plain: true }))

      answers.forEach(async answer => {
        const comments = await Comment.findAll({ where: { answer_id: answer.id } })
          .map(comment => comment.get({ plain: true }))
        answer.comments = comments
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

  router.post('/api/comment', isLoggedIn, asyncRoute(async (req, res) => {
    const {
      user: {
        id: author_id,
        community_id
      },
      body: {
        answerId,
        content
      }
    } = req

    const answer = await Answer.findOne({ where: { id: answerId } })
    const questionId = answer.question_id
    await Comment.create({
      question_id: questionId,
      answer_id: answerId,
      content,
      author_id,
      community_id
    })
    return res.redirect('/question/' + questionId)
  }))

  return router
}
