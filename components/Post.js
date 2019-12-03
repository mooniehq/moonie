import { withTranslation } from '../i18n'
import { arrayOf, number, shape, string } from 'prop-types'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import Showdown from 'showdown'
import Vote from './Vote'
import UserBadge from './UserBadge'
import TagsList from './TagsList'
import Comment from './Comment'
import MarkdownEditor from './MarkdownEditor'

const Post = ({ t, id, question_id, answer_id, content, comments }) => {
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
          <div>Aug 11 17 at 19:23</div>
          <UserBadge />
        </div>
        <div>
          {childComments}
        </div>
        <a href="#">{t('add_comment')}</a>
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
      </div>
    </div>
  )
}

Post.propTypes = {
  id: number,
  question_id: number,
  answer_id: number,
  content: string,
  comments: arrayOf(shape({
    id: number
  }))
}

export default withTranslation('common')(Post)
