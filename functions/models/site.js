const { Model, STRING } = require('sequelize')

module.exports = (sequelize) => {

  class Site extends Model {
  }

  Site.init(
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
      tableName: 'site'
    }
  )

  return Site
}
