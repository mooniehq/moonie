const { Post } = require('../models')
const { findPosts, createPost } = require('./post-service')
const { findAnswer } = require('./answer-service')

/**
 *
 * @param { number } answer_id
 */
const findCommentsByAnswer = async (answer_id) => {
  return findPosts({ type: Post.TYPE.COMMENT, answer_id })
}

/**
 *
 * @param { number } question_id
 */
const findCommentsByQuestion = async (question_id) => {
  return findPosts({ type: Post.TYPE.COMMENT, question_id, answer_id: null })
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
  return createPost(commentData)
}

module.exports = { findCommentsByAnswer, findCommentsByQuestion, createComment }
