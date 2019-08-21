const { Router } = require('express')
const asyncRoute = require('route-async')
const { createCommunity } = require('../services/community-service')
const { Community } = require('../models')

module.exports = (nextApp) => {

  const router = Router()

  router.get('/communities', asyncRoute(async (req, res) => {
    const communities = await Community.findAll().map(community => community.get({ plain: true }))
    return nextApp.render(req, res, '/home/communities', { communities })
  }))

  router.get('/create-community', asyncRoute(async (req, res) => {
    return nextApp.render(req, res, '/home/create-community')
  }))

  router.post('/api/community', asyncRoute(async (req, res) => {
    const { subdomain, email, password } = req.body
    const { user } = await createCommunity(subdomain, email, password)
    return res.json(user)
  }))

  return router
}
