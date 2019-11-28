const { Post } = require('../models')

/**
 *
 * @param { number } answer_id
 */
const findComments = async (answer_id) => {
  const comments = await Post.findAll({ where: { type: Post.TYPE.COMMENT, answer_id } })
  console.log(comments)
  return comments
}

/**
 *
 * @param { number } question_id
 * @param { number } answer_id
 * @param { string } content
 * @param { number } author_id
 */
const createComment = async (question_id, answer_id, content, author_id) => {
  await Post.create({
    type: Post.TYPE.COMMENT,
    question_id,
    answer_id,
    content,
    author_id
  })
}

module.exports = { findComments, createComment }
