const { Community } = require('../models')
const { createUser } = require('./user-service')

const createCommunity = async (subdomain, email, password) => {
  let community = await Community.findOne({ where: { subdomain } })
  if (!community) {
    community = await Community.create({ subdomain })
  }
  const user = await createUser(community, email, password)
  return {
    community,
    user
  }
}

module.exports = {
  createCommunity
}
