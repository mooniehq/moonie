const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { findAnswer } = require('../services/answer-service')
const { createComment } = require('../services/comment-service')

const router = Router()

router.post('/api/comment', isLoggedIn, asyncRoute(async (req, res) => {
  const {
    user: {
      id: author_id
    },
    body: {
      answerId,
      content
    }
  } = req

  const answer = await findAnswer(answerId)
  const questionId = answer.question_id
  await createComment(questionId, answerId, content, author_id)
  return res.redirect('/question/' + questionId)
}))

module.exports = router
