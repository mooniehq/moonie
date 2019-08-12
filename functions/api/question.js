const { Router } = require('express')
const { isLoggedIn } = require('../auth/authorize')
const { Question } = require('../models')

const router = Router()

router.post('/api/question', isLoggedIn, async (req, res) => {
  try {
    const { user } = req
    const { title, content } = req.body
    console.log(user)
    await Question.create({
      title,
      content,
      author_id: user.id,
      community_id: user.community_id
    })
    return res.redirect('/create-question')
  } catch (err) {
    console.error(err)
    return res.redirect('/create-question')
  }
})

module.exports = router
