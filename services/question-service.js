const { Post } = require('../models')
const { findAnswers } = require('../services/answer-service')
const { findCommentsByAnswer, findCommentsByQuestion } = require('../services/comment-service')
const { findPostById, findPosts, createPost } = require('./post-service')

const findQuestions = async () => {
  return findPosts({ type: Post.TYPE.QUESTION })
}

/**
 *
 * @param { number } id
 */
const findQuestion = async (id) => {
  return findPostById(id)
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
      const comments = await findCommentsByAnswer(answer.id)
      return {
        ...answer,
        comments
      }
    }))
    const comments = await findCommentsByQuestion(id)
    question = {
      ...question,
      comments,
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
  const question = {
    type: Post.TYPE.QUESTION,
    title,
    content,
    author_id
  }
  return createPost(question)
}

module.exports = { findQuestions, findQuestion, findFullQuestion, createQuestion }
