import * as React from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'

const MarkdownEditor = ({value}) => {
  const markdownToHtmlConverter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  })
  const [markdownContent, setMarkdownContent] = React.useState(value)
  const [selectedMardownMode, setSelectedMarkdownMode] = React.useState('write')
  return (
    <ReactMde
      value = {markdownContent}
      onChange = {setMarkdownContent}
      selectedTab = {selectedMardownMode}
      onTabChange = {setSelectedMarkdownMode}
      generateMarkdownPreview = {markdown =>
        Promise.resolve(markdownToHtmlConverter.makeHtml(markdown))
      }
    />
  )
}

export default MarkdownEditor
