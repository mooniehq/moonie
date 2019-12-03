import { withTranslation } from '../i18n'
import { shape, number, string, arrayOf } from 'prop-types'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import Page from '../components/Page'
import MarkdownEditor from '../components/MarkdownEditor'
import HasRightSidebar from '../components/HasRightSidebar'
import QuestionHeader from '../components/QuestionHeader'
import Post from '../components/Post'

const Question = (props) => {
  const { t, question } = props
  const { id: questionId, title, content, comments, answers } = question
  return (
    <Page {...props}>
      <HasRightSidebar>
        <QuestionHeader text={title} />
        <div>
          <Post {...question} />
          <div className="mt-2">
            <h2>{t('answer')}</h2>
            <Nav className="answer-tabs justify-content-end fs-12" tabs>
              <NavItem>
                <NavLink className='active'>
                  {t('active')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  {t('oldest')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  {t('votes')}
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div>
            {
              answers.map((answer) =>
                <Post {...answer} />
              )
            }
          </div>
          <h2>{t('your_answer')}</h2>
          <div>
            <Form action="/api/anwser" method="post">
              <input type="hidden" name="questionId" value={questionId} />
              <FormGroup>
                <Label for="answer-content">{t('answer')}</Label>
                <MarkdownEditor id="answer-content" name="content" value="" />
              </FormGroup>
              <Button type="submit" color="primary">{t('post_answer')}</Button>
            </Form>
          </div>
        </div>
        <div>
          <h4>{t('linked')}</h4>
          <h4>{t('related')}</h4>
        </div>
      </HasRightSidebar>
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
    id: number,
    title: string,
    content: string,
    comments: arrayOf(shape({
      id: number
    })),
    answers: arrayOf(shape({
      id: number,
      content: string,
      comments: arrayOf(shape({
        id: number
      }))
    }))
  })
}

export default withTranslation('common')(Question)
