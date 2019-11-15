import { withTranslation } from '../i18n'
import { shape, string, array } from 'prop-types'
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
import Answer from '../components/Answer'
import HasRightSidebar from '../components/HasRightSidebar'
import QuestionHeader from '../components/QuestionHeader'
import TagsList from '../components/TagsList'
import Vote from '../components/Vote'

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
      <HasRightSidebar>
        <QuestionHeader text={title} />
        <div>
          <div className="d-flex">
            <div><Vote /></div>
            <div>
              <p>{content}</p>
              <TagsList tags={tags} />
            </div>
          </div>
          <h2>{t('answer')}</h2>
          <Nav className="justify-content-end" tabs>
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
              <Button type="submit" color="primary">{t('post-answer')}</Button>
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
