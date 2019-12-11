const { Post } = require('../models')
const { toPlain } = require('../utils/sequelize-utils')
const { markdownToHtml } = require('../utils/markdown-utils')

/**
 *
 * @param { number } id
 */
const findPostById = async (id) => {
  let post = await Post.findOne({ where: { id } })
  post = toPlain(post)
  return post
}

/**
 *
 * @param { object } condition
 */
const findPosts = async (condition) => {
  let posts = await Post.findAll({ where: condition })
  posts = posts.map(toPlain)
  return posts
}

/**
 *
 * @param { object } post
*/
const createPost = async (data) => {
  const htmlContent = data.content ? markdownToHtml(data.content) : null
  const postData = { ...data, htmlContent }
  let post = await Post.create(postData)
  post = toPlain(post)
  return post
}

module.exports = { findPostById, findPosts, createPost }
