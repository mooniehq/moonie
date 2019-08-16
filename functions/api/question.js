const { Router } = require('express')
const { isLoggedIn } = require('../auth/authorize')
const { Question } = require('../models')

const router = Router()

router.post('/api/question', isLoggedIn, async (req, res) => {
  try {
    const { user } = req
    const { title, content } = req.body
    console.log(user)
    const question = await Question.create({
      title,
      content,
      author_id: user.id,
      community_id: user.community_id
    })
    console.log(question)
    return res.redirect('/create-question')
  } catch (err) {
    console.error(err)
    return res.redirect('/create-question')
  }
})

router.get('/api/question/:qid', isLoggedIn, async (req, res) => {
  try {
    const { user } = req
    const { qid } = req.params
    console.log(user)
    const question = await Question.findOne({
      where: {
        author_id: user.id,
        community_id: user.community_id,
        id: qid
      }
    })
    console.log(question)
    return res.json(question)
  } catch (err) {
    console.error(err)
    return res.json({})
  }
})

module.exports = router
