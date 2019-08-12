import React from 'react'
import PropTypes from 'prop-types'
import ReactMde from 'react-mde'
import Showdown from 'showdown'

const MarkdownEditor = ({ name, value }) => {
  const markdownToHtmlConverter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  })
  const textAreaProps = name ? { name } : {}
  const [markdownContent, setMarkdownContent] = React.useState(value)
  const [selectedMardownMode, setSelectedMarkdownMode] = React.useState('write')
  return (
    <ReactMde
      value = {markdownContent}
      onChange = {setMarkdownContent}
      selectedTab = {selectedMardownMode}
      onTabChange = {setSelectedMarkdownMode}
      textAreaProps = {textAreaProps}
      generateMarkdownPreview = {markdown =>
        Promise.resolve(markdownToHtmlConverter.makeHtml(markdown))
      }
    />
  )
}

MarkdownEditor.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
}

export default MarkdownEditor
