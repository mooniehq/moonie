const { Model, INTEGER, TEXT } = require('sequelize')

module.exports = function (sequelize) {

  class Question extends Model {

    static associate ({ User, Community }) {
      Question.belongsTo(User, { as: 'author' })
      Question.belongsTo(Community)
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
      },
      community_id: {
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
