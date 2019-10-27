const { User } = require('../models')

const findUser = async ({ id: site_id }, email) => {
  email = email.toLowerCase()
  const user = await User.findOne({ where: { site_id, email } })
  return user
}

const createUser = async (site, email, password) => {
  email = email.toLowerCase()
  let user = await findUser(site, email)
  if (!user) {
    const { id: site_id } = site
    user = await User.create({
      site_id,
      email,
      password
    })
  }
  return user
}

module.exports = { findUser, createUser }
