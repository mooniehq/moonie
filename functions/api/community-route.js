const express = require('express')
const router = express.Router()
const { Community } = require('../models')

router.get('/api/communities', async (req, res) => {
  try {
    let communities = await Community.findAll()
    return res.json(communities)
  } catch (err) {
    res.json(err)
  }
})

router.get('/api/communities/:id', async (req, res) => {
  try {
    const { id } = req.params
    let community = await Community.findOne({ where: { id } })
    return res.json(community)
  } catch (err) {
    res.json(err)
  }
})

module.exports = router