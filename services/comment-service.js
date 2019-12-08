const { Post } = require('../models')
const { toPlain } = require('../utils/sequelize-utils')
const { findAnswer } = require('./answer-service')

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
  let commentData = {
    type: Post.TYPE.COMMENT,
    content,
    author_id
  }
  if (answer_id) {
    const answer = await findAnswer(answer_id)
    question_id = answer.question_id
    commentData = {
      ...commentData,
      question_id,
      answer_id
    }
  } else {
    commentData = {
      ...commentData,
      question_id
    }
  }
  let comment = await Post.create(commentData)
  comment = toPlain(comment)
  return comment
}

module.exports = { findCommentsByAnswer, findCommentsByQuestion, createComment }
