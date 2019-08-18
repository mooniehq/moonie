const { Router } = require('express')
const { isLoggedIn } = require('../middleware/authorize')
const { Question } = require('../models')

module.exports = function (nextApp) {

  const router = Router()

  router.get('/question/:id', async (req, res) => {
    try {
      const { id } = req.params
      const question = await Question.findOne({ where: { id } })
      return nextApp.render(req, res, '/question/:id', { question })
    } catch (err) {
      res.send(err)
    }
  })

  router.post('/api/question', isLoggedIn, async (req, res) => {
    try {
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
    } catch (err) {
      console.error(err)
      return res.redirect('/create-question')
    }
  })

  return router
}
