const express = require('express')
const router = express.Router()
const { Question } = require('../models')

module.exports = function (app, passport) {

  router.post('/create-question', async (req, res) => {
    try {
      const { title, content } = req
      await Question.create({ title, content })
      return res.redirect('/create-question')
    } catch (err) {
      return res.redirect('/create-question')
    }
  })

  return router
}
