import { number, string } from 'prop-types'

const Comment = ({ id, htmlContent }) => {

  return (
    <div key={`comment-${id}`} className="comment border-bottom bc-black-2 p-2 fs-13">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
    </div>
  )
}

Comment.propTypes = {
  id: number,
  htmlContent: string
}

export default Comment
