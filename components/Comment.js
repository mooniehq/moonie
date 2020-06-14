import { number, string } from 'prop-types'

const Comment = ({ id, htmlContent }) => {

  return (
    <div className="border-gray-t text-sm py-3" key={`comment-${id}`}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
    </div>
  )
}

Comment.propTypes = {
  id: number,
  htmlContent: string
}

export default Comment
