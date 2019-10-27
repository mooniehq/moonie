const { appConfig } = require('../config/config')
const { Site } = require('../models')
const { createUser } = require('./user-service')

const createSite = async (subdomain, email, password) => {
  let site = await Site.findOne({ where: { subdomain } })
  if (!site) {
    site = await Site.create({ subdomain })
  }
  const user = await createUser(site, email, password)
  return {
    site,
    user
  }
}

const getSiteUrl = (subdomain) => {
  const { baseDomain } = appConfig
  return `${subdomain}.${baseDomain}`
}

module.exports = {
  createSite,
  getSiteUrl
}
