const Showdown = require('showdown')

const markdownToHtml = content => {
  const markdownToHtmlConverter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  })
  return markdownToHtmlConverter.makeHtml(content)
}

module.exports = { markdownToHtml }
