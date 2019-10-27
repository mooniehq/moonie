const { Site } = require('../models')
const { appConfig: { baseDomain } } = require('../config/config')

const lookUpSite = async (req, res, next) => {

  try {
    delete req.site // make sure site is injected server-side

    const { hostname } = req
    const domainIndex = hostname.indexOf(baseDomain)
    let subdomain
    if (domainIndex > 1) { // subdomain.basedomain
      subdomain = hostname.substring(0, domainIndex - 1)
    }
    if (subdomain) {
      const site = await Site.findOne({ where: { subdomain } })
      if (site) {
        req.site = site
      }
    }
    next()

  } catch (err) {
    res.status(500).send(err)
  }
}

const isSite = (req, res, next) => {
  if (req.site) {
    next()
  } else {
    res.status(404).send('Not Found')
  }
}

const isHome = (req, res, next) => {
  if (req.site) {
    res.status(404).send('Not Found')
  } else {
    next()
  }
}

module.exports = { lookUpSite, isSite, isHome }
