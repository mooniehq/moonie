const { Router } = require('express')
const asyncRoute = require('route-async')
const { isHome } = require('../middleware/site')
const { createSite } = require('../services/site-service')

const router = Router()

router.post('/api/site', isHome, asyncRoute(async (req, res) => {
  const { subdomain, email, password } = req.body
  const { user } = await createSite(subdomain, email, password)
  return res.json(user)
}))

module.exports = router
