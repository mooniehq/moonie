const { Model, INTEGER, TEXT } = require('sequelize')

module.exports = function (sequelize) {

  class Answer extends Model {

    static associate ({ User, Community, Question }) {
      Answer.belongsTo(User, { as: 'author' })
      Answer.belongsTo(Community)
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
      },
      community_id: {
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
