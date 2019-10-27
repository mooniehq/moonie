const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { isSite } = require('../middleware/site')
const { Answer, Comment } = require('../models')

const router = Router()

router.post('/api/comment', isSite, isLoggedIn, asyncRoute(async (req, res) => {
  const {
    user: {
      id: author_id,
      site_id
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
    site_id
  })
  return res.redirect('/question/' + questionId)
}))

module.exports = router
