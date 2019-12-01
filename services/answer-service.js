const { Post } = require('../models')
const { toPlain } = require('../utils/sequelize-utils')

/**
 *
 * @param { number } id
 */
const findAnswer = async (id) => {
  let answer = await Post.findOne({ where: { id } })
  answer = toPlain(answer)
  return answer
}

/**
 *
 * @param { number } question_id
 */
const findAnswers = async (question_id) => {
  let answers = await Post.findAll({ where: { type: Post.TYPE.ANSWER, question_id } })
  answers = answers.map(toPlain)
  return answers
}

/**
 *
 * @param { number } question_id
 * @param { string } content
 * @param { number } author_id
 */
const createAnswer = async (question_id, content, author_id) => {
  let answer = await Post.create({
    type: Post.TYPE.ANSWER,
    question_id,
    content,
    author_id
  })
  answer = toPlain(answer)
  return answer
}

module.exports = { findAnswer, findAnswers, createAnswer }
