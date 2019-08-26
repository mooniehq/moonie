import React from 'react'
import PropTypes from 'prop-types'
import ReactMde from 'react-simplemde-editor'

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: "" }
    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    this.setState({ content: value })
  }

  render() {
    const { id, name } = this.props
    const { content } = this.state
    return (
      <>
        <textarea name={name} value={content} style={{display:'none'}}/>
        <ReactMde id={id} value={content} onChange={this.onChange}/>
      </>
    )
  }
}

MarkdownEditor.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}

export default MarkdownEditor
