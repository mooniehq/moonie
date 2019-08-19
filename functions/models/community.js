const { Model, STRING } = require('sequelize')

module.exports = (sequelize) => {

  class Community extends Model {
  }

  Community.init(
    {
      subdomain: {
        type: STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      tableName: 'community'
    }
  )

  return Community
}
