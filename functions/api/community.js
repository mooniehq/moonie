const { Router } = require('express')
const { Community } = require('../models')

const router = Router()

router.get('/api/communities', async (req, res) => {
  try {
    const communities = await Community.findAll()
    return res.json(communities)
  } catch (err) {
    res.json(err)
  }
})

router.get('/api/communities/:id', async (req, res) => {
  try {
    const { id } = req.params
    const community = await Community.findOne({ where: { id } })
    return res.json(community)
  } catch (err) {
    res.json(err)
  }
})

module.exports = router
