const { Router } = require('express')
const asyncRoute = require('route-async')
const { Community } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/community', asyncRoute(async (req, res) => {
    const communities = await Community.findAll().map(community => community.get({ plain: true }))
    return nextApp.render(req, res, '/community', { communities })
  }))

  router.get('/community/:id', asyncRoute(async (req, res) => {
    const { id } = req.params
    const community = await Community.findOne({ where: { id } })
    return nextApp.render(req, res, '/community/:id', { community })
  }))

  return router
}
