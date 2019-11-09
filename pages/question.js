import { withTranslation } from '../i18n'
import { shape, string, array } from 'prop-types'
import { Button, Form, FormGroup, Label } from 'reactstrap'
import Page from '../components/Page'
import MarkdownEditor from '../components/MarkdownEditor'
import Answer from '../components/Answer'
import ThreeColumnContainer from '../components/ThreeColumnContainer'
import QuestionHeader from '../components/QuestionHeader'
import TagsList from '../components/TagsList'

const Question = (props) => {
  const { t, question: { id: questionId, title, content }, answers } = props
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
    <Page {...props}>
      <ThreeColumnContainer>
        <QuestionHeader text={title} />
        <div>
          <p>{content}</p>
          <TagsList tags={tags} />
          <h2>{t('answer')}</h2>
          <div>
            {
              answers.map(({ id: answerId, content, comments }) =>
                <Answer id={answerId} content={content} comments={comments} />
              )
            }
          </div>
          <h2>{t('your-answer')}</h2>
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
        </div>
        <div>{t('related')}</div>
      </ThreeColumnContainer>
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
