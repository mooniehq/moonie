const { Model, INTEGER, TEXT } = require('sequelize')

module.exports = function (sequelize) {

  class Post extends Model {

    static associate ({ User }) {
      Post.belongsTo(User, { as: 'author' })
      Post.belongsTo(Post, { as: 'answer' })
      Post.belongsTo(Post, { as: 'question' })
    }
  }

  Post.TYPE = {
    QUESTION: 0,
    ANSWER: 1,
    COMMENT: 2
  }

  Post.init(
    {
      type: {
        type: INTEGER,
        allowNull: false
      },
      title: {
        type: TEXT
      },
      content: {
        type: TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      htmlContent: {
        type: TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      question_id: {
        type: INTEGER
      },
      answer_id: {
        type: INTEGER
      },
      author_id: {
        type: INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'post'
    }
  )

  return Post
}
