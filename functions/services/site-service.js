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

module.exports = {
  createSite
}
