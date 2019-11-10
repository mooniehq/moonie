import { withTranslation } from '../i18n'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Showdown from 'showdown'
import { string, array } from 'prop-types'
import MarkdownEditor from './MarkdownEditor'
import Comment from './Comment'

const Answer = ({ t, id, content, comments }) => {

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
        <div dangerouslySetInnerHTML={{ __html: innerHtml }}/>
        <div>
          {childComments}
        </div>
        <a href="#">{t('add-comment')}</a>
        <div>
          <Form action="/api/comment" method="post">
            <Input type="hidden" name="answerId" value={id} />
            <FormGroup>
              <MarkdownEditor id={`answer-${id}-comment-content`} name="content" value="" />
            </FormGroup>
            <Button type="submit" color="primary">{t('post-comment')}</Button>
          </Form>
        </div>
      </div>
    </>
  )
}

Answer.propTypes = {
  id: string,
  content: string,
  comments: array
}

export default withTranslation('common')(Answer)
