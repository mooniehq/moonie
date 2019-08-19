const { Router } = require('express')
const asyncRoute = require('route-async')
const { isLoggedIn } = require('../middleware/authorize')
const { Question } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/question/:id', asyncRoute(async (req, res) => {
    const { id } = req.params
    const question = await Question.findOne({ where: { id } })
    return nextApp.render(req, res, '/question/:id', { question })
  }))

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
    return res.redirect('/create-question')
  }))

  return router
}
