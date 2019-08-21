const { User } = require('../models')

const findUser = async ({ id: community_id }, email) => {
  email = email.toLowerCase()
  const user = await User.findOne({ where: { community_id, email } })
  return user
}

const createUser = async (community, email, password) => {
  email = email.toLowerCase
  let user = await findUser(community, email)
  if (!user) {
    const { id: community_id } = community
    user = await User.create({
      community_id,
      email,
      password
    })
  }
  return user
}

module.exports = { findUser, createUser }
