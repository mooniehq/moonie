const { Router } = require('express')
const { isLoggedIn } = require('../middleware/authorize')
const { Question } = require('../models')

const router = Router()

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

module.exports = router
