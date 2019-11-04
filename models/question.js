const { Model, INTEGER, TEXT } = require('sequelize')

module.exports = (sequelize) => {

  class Question extends Model {

    static associate ({ User }) {
      Question.belongsTo(User, { as: 'author' })
    }
  }

  Question.init(
    {
      title: {
        type: TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      content: {
        type: TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      author_id: {
        type: INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'question'
    }
  )

  return Question
}
