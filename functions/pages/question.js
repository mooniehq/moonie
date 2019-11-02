import { withTranslation } from '../i18n'
import { shape, string, array } from 'prop-types'
import { Button, Form, FormGroup, Label } from 'reactstrap'
import Page from '../components/Page'
import MarkdownEditor from '../components/MarkdownEditor'
import Answer from '../components/Answer'

const Question = (props) => {
  const { t, question: { id: questionId, title, content }, answers } = props
  return (
    <Page {...props}>
      <div>{title}</div>
      <p>{content}</p>
      <div>
        {
          answers.map(({ id: answerId, content, comments }) =>
            <Answer id={answerId} content={content} comments={comments} />
          )
        }
      </div>
      <div>
        <Form action="/api/anwser" method="post">
          <input type="hidden" name="questionId" value={questionId} />
          <FormGroup>
            <Label for="answer-content">{t('answer')}</Label>
            <MarkdownEditor id="answer-content" name="content" value="" />
          </FormGroup>
          <Button type="submit">{t('submit')}</Button>
        </Form>
      </div>
    </Page>
  )
}

Question.getInitialProps = async ({ query: { user, question, answers } }) => {
  return {
    user,
    question,
    answers
  }
}

Question.propTypes = {
  user: shape({
    email: string
  }),
  question: shape({
    title: string,
    content: string
  }),
  answers: shape({
    id: string,
    content: string,
    comments: array
  })
}

export default withTranslation('common')(Question)
