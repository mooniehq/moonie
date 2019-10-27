const { Router } = require('express')
const asyncRoute = require('route-async')
const { isHome } = require('../middleware/site')
const { Site } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/sites', isHome, asyncRoute(async (req, res) => {
    const { site } = req
    if (site) {
      res.status(404)
    } else {
      const sites = await Site.findAll().map(site => site.get({ plain: true }))
      return nextApp.render(req, res, '/hq/sites', { sites })
    }
  }))

  router.get('/create-site', isHome, asyncRoute(async (req, res) => {
    return nextApp.render(req, res, '/hq/create-site')
  }))

  return router
}
