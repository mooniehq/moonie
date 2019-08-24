const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { isCommunity } = require('../middleware/community')
const { Answer } = require('../models')

const router = Router()

router.post('/api/anwser', isCommunity, isLoggedIn, asyncRoute(async (req, res) => {
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

module.exports = router
