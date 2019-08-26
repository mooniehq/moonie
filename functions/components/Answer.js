import Showdown from 'showdown'
import { string, array } from 'prop-types'
import MarkdownEditor from './MarkdownEditor'
import Comment from './Comment'

const Answer = ({ id, content, comments }) => {

  const markdownToHtmlConverter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  })

  const innerHtml = markdownToHtmlConverter.makeHtml(content)

  const childComments = comments.map(({ id: commentId, content }) =>
    <Comment id={commentId} content={content} />
  )

  return (
    <>
      <div key={id}>
        <h5>ans {id}</h5>
        <div dangerouslySetInnerHTML={{ __html: innerHtml }}/>
      </div>

      <div>
        <h3>cmt</h3>
        {childComments}
      </div>
      <div>
        <h2>Add Comment</h2>
        <form action="/api/comment" method="post">
          <input type="hidden" name="answerId" value={id} />
          <MarkdownEditor id="comment-content" name="content" value="" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}

Answer.propTypes = {
  id: string,
  content: string,
  comments: array
}

export default Answer
