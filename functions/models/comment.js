const { Model, INTEGER, TEXT } = require('sequelize')

module.exports = function (sequelize) {

  class Comment extends Model {

    static associate ({ User, Site, Question, Answer }) {
      Comment.belongsTo(User, { as: 'author' })
      Comment.belongsTo(Site)
      Comment.belongsTo(Answer)
      Comment.belongsTo(Question)
    }
  }

  Comment.init(
    {
      question_id: {
        type: INTEGER,
        allowNull: false
      },
      answer_id: {
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
      site_id: {
        type: INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'comment'
    }
  )

  return Comment
}
