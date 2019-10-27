const { Router } = require('express')
const asyncRoute = require('route-async')
const { Site, Question } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/', asyncRoute(async (req, res) => {
    const { site, user } = req
    if (site) {
      const questions = await Question.findAll({ where: { site_id: site.id } })
        .map(question => question.get({ plain: true }))
      return nextApp.render(req, res, '/site/index', { user, site, questions })
    } else {
      const sites = await Site.findAll().map(site => site.get({ plain: true }))
      return nextApp.render(req, res, '/hq/index', { sites })
    }
  }))

  return router
}
