const { Post } = require('../models')

const findQuestions = async () => {
  const questions = await Post.findAll({ where: { type: Post.TYPE.QUESTION } })
  return questions
}

/**
 *
 * @param { number } id
 */
const findQuestion = async (id) => {
  const question = await Post.findOne({ where: { id } })
  return question
}

/**
 *
 * @param { string } title
 * @param { string } content
 * @param { number } author_id
 */
const createQuestion = async (title, content, author_id) => {
  await Post.create({
    type: Post.TYPE.QUESTION,
    title,
    content,
    author_id
  })
}

module.exports = { findQuestions, findQuestion, createQuestion }
