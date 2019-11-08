const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { Answer } = require('../models')

const router = Router()

router.post('/api/anwser', isLoggedIn, asyncRoute(async (req, res) => {
  const {
    user: {
      id: author_id
    },
    body: {
      questionId,
      content
    }
  } = req
  await Answer.create({
    question_id: questionId,
    content,
    author_id
  })
  return res.redirect('/question/' + questionId)
}))

module.exports = router