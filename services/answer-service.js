const { Post } = require('../models')
const { findPostById, findPosts, createPost } = require('./post-service')

/**
 *
 * @param { number } id
 */
const findAnswer = async (id) => {
  return findPostById(id)
}

/**
 *
 * @param { number } question_id
 */
const findAnswers = async (question_id) => {
  return findPosts({ type: Post.TYPE.ANSWER, question_id })
}

/**
 *
 * @param { number } question_id
 * @param { string } content
 * @param { number } author_id
 */
const createAnswer = async (question_id, content, author_id) => {
  const answer = {
    type: Post.TYPE.ANSWER,
    question_id,
    content,
    author_id
  }
  return createPost(answer)
}

module.exports = { findAnswer, findAnswers, createAnswer }
