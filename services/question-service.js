const { Post } = require('../models')
const { toPlain } = require('../utils/sequelize-utils')
const { findAnswers } = require('../services/answer-service')
const { findComments } = require('../services/comment-service')

const findQuestions = async () => {
  let questions = await Post.findAll({ where: { type: Post.TYPE.QUESTION } })
  questions = questions.map(toPlain)
  return questions
}

/**
 *
 * @param { number } id
 */
const findQuestion = async (id) => {
  let question = await Post.findOne({ where: { id } })
  question = toPlain(question)
  return question
}

/**
 *
 * @param { number } id
 */
const findFullQuestion = async (id) => {
  let question = await findQuestion(id)
  if (question) {
    let answers = []
    answers = await findAnswers(id)
    answers = await Promise.all(answers.map(async (answer) => {
      const comments = await findComments(answer.id)
      return {
        ...answer,
        comments
      }
    }))
    question = {
      ...question,
      answers
    }
  }
  return question
}

/**
 *
 * @param { string } title
 * @param { string } content
 * @param { number } author_id
 */
const createQuestion = async (title, content, author_id) => {
  let question = await Post.create({
    type: Post.TYPE.QUESTION,
    title,
    content,
    author_id
  })
  question = toPlain(question)
  return question
}

module.exports = { findQuestions, findQuestion, findFullQuestion, createQuestion }
