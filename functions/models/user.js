const { Model, INTEGER, STRING } = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = (sequelize) => {

  class User extends Model {

    static associate ({ Community }) {
      User.belongsTo(Community)
    }

    validPassword (password) {
      return bcrypt.compareSync(password, this.password)
    }
  }

  const userCommunityUniqueConstraint = 'user_community_id_email'

  User.init(
    {
      email: {
        type: STRING,
        allowNull: false,
        unique: userCommunityUniqueConstraint,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: STRING,
        allowNull: false
      },
      community_id: {
        type: INTEGER,
        unique: 'user_community_id_email'
      }
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
        }
      },
      sequelize,
      tableName: 'member' // user is a DB's reserved keyword
    }
  )

  return User
}
