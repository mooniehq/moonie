const { Answer } = require('../models')

const findAnswer = async (id) => {
  const answer = await Answer.findOne({ where: { id } })
  return answer
}

const findAnswers = async (question_id) {
  const answers = await Answer.findAll({ where: { question_id } })
  return answers
}

const createAnswer = async (question_id, content, author_id) => {
  await Answer.create({
    question_id,
    content,
    author_id
  })
}

module.exports = { findAnswer, findAnswers, createAnswer }
