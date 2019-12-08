import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactMde from 'react-simplemde-editor'

const MarkdownEditor = ({ id, name }) => {
  const [content, setContent] = useState('')
  return (
    <>
      <textarea name={name} value={content} style={{ display: 'none' }}/>
      <ReactMde id={id} value={content} onChange={(value) => setContent(value)}/>
    </>
  )
}

MarkdownEditor.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}

export default MarkdownEditor
