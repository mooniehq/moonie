const { Post } = require('../models')

/**
 *
 * @param { number } id
 */
const findAnswer = async (id) => {
  const answer = await Post.findOne({ where: { id } })
  return answer
}

/**
 *
 * @param { number } question_id
 */
const findAnswers = async (question_id) => {
  const answers = await Post.findAll({ where: { type: Post.TYPE.ANSWER, question_id } })
  return answers
}

/**
 *
 * @param { number } question_id
 * @param { string } content
 * @param { number } author_id
 */
const createAnswer = async (question_id, content, author_id) => {
  await Post.create({
    type: Post.TYPE.ANSWER,
    question_id,
    content,
    author_id
  })
}

module.exports = { findAnswer, findAnswers, createAnswer }
