import Showdown from 'showdown'
import { number, string } from 'prop-types'

const Comment = ({ id, content }) => {

  const markdownToHtmlConverter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  })
  const innerHtml = markdownToHtmlConverter.makeHtml(content)
  return (
    <div key={`comment-${id}`} className="comment border-bottom bc-black-2 p-2 fs-13">
      <div dangerouslySetInnerHTML={{ __html: innerHtml }}/>
    </div>
  )
}

Comment.propTypes = {
  id: number,
  content: string
}

export default Comment
