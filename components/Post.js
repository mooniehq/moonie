import { withTranslation } from '../i18n'
import React, { useState } from 'react';
import { arrayOf, number, shape, string } from 'prop-types'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import Showdown from 'showdown'
import Vote from './Vote'
import UserBadge from './UserBadge'
import TagsList from './TagsList'
import Comment from './Comment'
import MarkdownEditor from './MarkdownEditor'

const Post = ({ t, id, question_id, content, comments }) => {

  const [showCommentForm, setShowCommentForm] = useState(false)

  let answer_id
  if (question_id) {
    answer_id = id
  } else {
    question_id = id
  }

  const markdownToHtmlConverter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  })

  const renderedContent = markdownToHtmlConverter.makeHtml(content)

  const childComments = comments.map(({ id: commentId, content }) =>
    <Comment id={commentId} content={content} />
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
    <div className="d-flex">
      <div className="pr-3">
        <Vote />
      </div>
      <div className="flex-grow flex-fill">
        <div className="mb-1" dangerouslySetInnerHTML={{ __html: renderedContent }} />
        <TagsList tags={tags} />
        <div className="d-flex justify-content-between mt-4 fs-13">
          <div className="btn-toolbar post-actions">
            <a href="#">{t('share')}</a>
            <a href="#">{t('edit')}</a>
            <a href="#">{t('flag')}</a>
          </div>
          <UserBadge />
        </div>
        <div className="mt-4 mb-4 border-top bc-black-2">
          {childComments}
        </div>
        <a onClick={() => setShowCommentForm(!showCommentForm)}>{t('add_comment')}</a>
        {showCommentForm && (
          <div>
            <Form action="/api/comment" method="post">
              {
                answer_id &&
                <Input type="hidden" name="answerId" value={answer_id} />
              }
              {
                question_id &&
                <Input type="hidden" name="questionId" value={question_id} />
              }
              <FormGroup>
                <MarkdownEditor id={`answer-${id}-comment-content`} name="content" value="" />
              </FormGroup>
              <Button type="submit" color="primary">{t('post_comment')}</Button>
            </Form>
          </div>
        )}
      </div>
    </div>
  )
}

Post.propTypes = {
  id: number,
  question_id: number,
  content: string,
  comments: arrayOf(shape({
    id: number
  }))
}

export default withTranslation('common')(Post)
