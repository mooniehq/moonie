const { User } = require('../models')

/**
 *
 * @param { string } email
 */
const findUser = async (email) => {
  email = email.toLowerCase()
  const user = await User.findOne({ where: { email } })
  return user
}

/**
 *
 * @param { string } email
 * @param { string } password
 */
const createUser = async (email, password) => {
  email = email.toLowerCase()
  let user = await findUser(email)
  if (!user) {
    user = await User.create({
      email,
      password
    })
  }
  return user
}

module.exports = { findUser, createUser }
