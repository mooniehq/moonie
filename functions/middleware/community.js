const { Community } = require('../models')

const { appConfig: { baseDomain } } = require('../config/config')

const lookUpCommunity = async (req, res, next) => {
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
}

module.exports = { lookUpCommunity }
