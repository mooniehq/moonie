const { Comment } = require('../models')

const findComments = async (answer_id) => {
  const comments = await Comment.findAll({ where: { answer_id } })
  return comments
}

const createComment = async (question_id, answer_id, content, author_id) => {
  await Comment.create({
    question_id,
    answer_id,
    content,
    author_id
  })
}

module.exports = { findComments, createComment }
