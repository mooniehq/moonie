const { Router } = require('express')
const asyncRoute = require('route-async')
const { isHome } = require('../middleware/community')
const { createCommunity } = require('../services/community-service')

const router = Router()

router.post('/api/community', isHome, asyncRoute(async (req, res) => {
  const { subdomain, email, password } = req.body
  const { user } = await createCommunity(subdomain, email, password)
  return res.json(user)
}))

module.exports = router
