const { Router } = require('express')
const { Community } = require('../models')

module.exports = function (nextApp) {

  const router = Router()

  router.get('/community', async (req, res) => {
    try {
      const communities = await Community.findAll().map(community => community.get({ plain: true }))
      return nextApp.render(req, res, '/community', { communities })
    } catch (err) {
      res.send(err)
    }
  })

  router.get('/community/:id', async (req, res) => {
    try {
      const { id } = req.params
      const community = await Community.findOne({ where: { id } })
      return nextApp.render(req, res, '/community/:id', { community })
    } catch (err) {
      res.send(err)
    }
  })

  return router
}
