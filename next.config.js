const withCss = require('@zeit/next-css')
const withImages = require('next-images')
const compose = require('next-compose')

module.exports = compose(
  [withCss, {}],
  [withImages, {}],
  {}
)
