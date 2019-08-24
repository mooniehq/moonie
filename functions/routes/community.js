const { Router } = require('express')
const asyncRoute = require('route-async')
const { isHome } = require('../middleware/community')
const { Community } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/communities', isHome, asyncRoute(async (req, res) => {
    const { community } = req
    if (community) {
      res.status(404)
    } else {
      const communities = await Community.findAll().map(community => community.get({ plain: true }))
      return nextApp.render(req, res, '/home/communities', { communities })
    }
  }))

  router.get('/create-community', isHome, asyncRoute(async (req, res) => {
    return nextApp.render(req, res, '/home/create-community')
  }))

  return router
}
