const { sequelize, User } = require('../models')

async function findUser (subdomain, email) {
  const users = await sequelize.query(
    'select m.* from member m inner join community c on m.community_id = c.id where m.email = :email and c.subdomain = :subdomain',
    {
      model: User,
      mapToModel: true,
      replacements: { email, subdomain },
      type: sequelize.QueryTypes.SELECT
    }
  )
  if (users.length === 0) {
    return null
  }
  const user = users[0]
  return user
}

module.exports = { findUser }
