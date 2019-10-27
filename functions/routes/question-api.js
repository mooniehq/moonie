const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { isSite } = require('../middleware/site')
const { Question } = require('../models')

const router = Router()

router.post('/api/question', isSite, isLoggedIn, asyncRoute(async (req, res) => {
  const {
    user: {
      id: author_id,
      site_id
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
    site_id
  })
  return res.redirect('/ask')
}))

module.exports = router
