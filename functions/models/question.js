const { Model, TEXT } = require('sequelize')

module.exports = function (sequelize) {

  class Question extends Model {

    static associate (db) {
      Question.belongsTo(db.User, { as: 'author' })
      Question.belongsTo(db.Community)
    }
  }

  Question.init(
    {
      title: {
        type: TEXT,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      content: {
        type: TEXT,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      tableName: 'question'
    }
  )

  return Question
}
