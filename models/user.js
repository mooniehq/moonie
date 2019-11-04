const { Model, STRING } = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = (sequelize) => {

  class User extends Model {

    validPassword (password) {
      return bcrypt.compareSync(password, this.password)
    }
  }

  User.init(
    {
      email: {
        type: STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: STRING,
        allowNull: false
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
