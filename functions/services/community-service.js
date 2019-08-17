const { Community, User } = require('../models')

async function createCommunity (subdomain, email, password) {
  let community = await Community.findOne({ where: { subdomain } })
  if (!community) {
    community = await Community.create({ subdomain })
  }
  const { id: community_id } = community
  let user = await User.findOne({ where: { community_id, email } })
  if (!user) {
    user = await User.create({
      community_id,
      email,
      password
    })
  }
  return {
    community,
    user
  }
}

module.exports = {
  createCommunity
}
