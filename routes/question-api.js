const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { Question } = require('../models')

const router = Router()

router.post('/api/question', isLoggedIn, asyncRoute(async (req, res) => {
  const {
    user: {
      id: author_id
    },
    body: {
      title,
      content
    }
  } = req
  await Question.create({
    title,
    content,
    author_id
  })
  return res.redirect('/ask')
}))

module.exports = router
