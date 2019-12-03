const { Post } = require('../models')
const { toPlain } = require('../utils/sequelize-utils')

/**
 *
 * @param { number } answer_id
 */
const findCommentsByAnswer = async (answer_id) => {
  let comments = await Post.findAll({ where: { type: Post.TYPE.COMMENT, answer_id } })
  comments = comments.map(toPlain)
  return comments
}

/**
 *
 * @param { number } question_id
 */
const findCommentsByQuestion = async (question_id) => {
  let comments = await Post.findAll({ where: { type: Post.TYPE.COMMENT, question_id, answer_id: null } })
  comments = comments.map(toPlain)
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
  let comment = await Post.create({
    type: Post.TYPE.COMMENT,
    question_id,
    answer_id,
    content,
    author_id
  })
  comment = toPlain(comment)
  return comment
}

module.exports = { findCommentsByAnswer, findCommentsByQuestion, createComment }
