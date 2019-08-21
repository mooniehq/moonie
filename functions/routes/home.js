const { Router } = require('express')
const asyncRoute = require('route-async')
const { Community } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/', asyncRoute(async (req, res) => {
    const { community, user } = req
    if (community) {
      return nextApp.render(req, res, '/community/index', { user, community })
    } else {
      const communities = await Community.findAll().map(community => community.get({ plain: true }))
      return nextApp.render(req, res, '/home/index', { communities })
    }
  }))

  return router
}
