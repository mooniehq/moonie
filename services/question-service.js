const { Question } = require('../models')

const findQuestions = async () => {
  const questions = await Question.findAll()
  return questions
}

const findQuestion = async (id) => {
  const question = await Question.findOne({ where: { id } })
  return question
}

const createQuestion = async (title, content, author_id) => {
  await Question.create({
    title,
    content,
    author_id
  })
}

module.exports = { findQuestions, findQuestion, createQuestion }
