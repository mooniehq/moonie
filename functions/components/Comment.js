import Showdown from 'showdown'
import { string } from 'prop-types'

const Comment = ({ id, content }) => {

  const markdownToHtmlConverter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  })
  const innerHtml = markdownToHtmlConverter.makeHtml(content)
  return (
    <div key={id}>
      <div>Comment {id}</div>
      <div dangerouslySetInnerHTML={{ __html: innerHtml }}/>
    </div>
  )
}

Comment.propTypes = {
  id: string,
  content: string
}

export default Comment
