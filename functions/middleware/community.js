const { Community } = require('../models')
const { appConfig: { baseDomain } } = require('../config/config')

const lookUpCommunity = async (req, res, next) => {

  try {
    delete req.community // make sure community is injected server-side

    const { hostname } = req
    const domainIndex = hostname.indexOf(baseDomain)
    let subdomain
    if (domainIndex > 1) { // subdomain.basedomain
      subdomain = hostname.substring(0, domainIndex - 1)
    }
    if (subdomain) {
      const community = await Community.findOne({ where: { subdomain } })
      if (community) {
        req.community = community
      }
    }
    next()

  } catch (err) {
    res.status(500).send(err)
  }
}

const isCommunity = (req, res, next) => {
  if (req.community) {
    next()
  } else {
    res.status(404).send('Not Found')
  }
}

const isHome = (req, res, next) => {
  if (req.community) {
    res.status(404).send('Not Found')
  } else {
    next()
  }
}

module.exports = { lookUpCommunity, isCommunity, isHome }
