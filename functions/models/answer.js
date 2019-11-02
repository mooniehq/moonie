const { Model, INTEGER, TEXT } = require('sequelize')

module.exports = function (sequelize) {

  class Answer extends Model {

    static associate ({ User, Question }) {
      Answer.belongsTo(User, { as: 'author' })
      Answer.belongsTo(Question)
    }
  }

  Answer.init(
    {
      question_id: {
        type: INTEGER,
        allowNull: false
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
      tableName: 'answer'
    }
  )

  return Answer
}
