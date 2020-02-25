import { withTranslation } from '../i18n'
import React, { useState } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import Vote from './Vote'
import UserBadge from './UserBadge'
import TagsList from './TagsList'
import Comment from './Comment'
import MarkdownEditor from './MarkdownEditor'

const Post = ({ t, id, question_id, htmlContent, comments }) => {

  const [showCommentForm, setShowCommentForm] = useState(false)

  let answer_id
  if (question_id) {
    answer_id = id
  } else {
    question_id = id
  }

  const childComments = comments.map(({ id: commentId, htmlContent }) =>
    <Comment id={commentId} htmlContent={htmlContent} />
  )
  const tags = [
    {
      label: 'java'
    },
    {
      label: 'database'
    },
    {
      label: 'api'
    }
  ]
  return (
    <div>
      <div>
        <Vote />
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <TagsList tags={tags} />
        <div>
          <div>
            <a href="#">{t('share')}</a>
            <a href="#">{t('edit')}</a>
            <a href="#">{t('flag')}</a>
          </div>
          <UserBadge />
        </div>
        <div>
          {childComments}
        </div>
        <a onClick={() => setShowCommentForm(!showCommentForm)}>{t('add_comment')}</a>
        {showCommentForm && (
          <div>
            <form action="/api/comment" method="post">
              {
                answer_id &&
                <input type="hidden" name="answerId" value={answer_id} />
              }
              {
                question_id &&
                <input type="hidden" name="questionId" value={question_id} />
              }
              <MarkdownEditor id={`answer-${id}-comment-content`} name="content" value="" />
              <button type="submit">{t('post_comment')}</button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

Post.propTypes = {
  id: number,
  question_id: number,
  htmlContent: string,
  comments: arrayOf(shape({
    id: number
  }))
}

export default withTranslation('common')(Post)
