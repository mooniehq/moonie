const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { createComment } = require('../services/comment-service')

const router = Router()

router.post('/api/comment', isLoggedIn, asyncRoute(async (req, res) => {
  const {
    user: {
      id: author_id
    },
    body: {
      answerId,
      questionId,
      content
    }
  } = req
  await createComment(questionId, answerId, content, author_id)
  return res.redirect('/question/' + questionId)
}))

module.exports = router
