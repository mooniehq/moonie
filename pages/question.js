import { withTranslation } from '../i18n'
import { shape, number, string, arrayOf } from 'prop-types'
import Page from '../components/Page'
import MarkdownEditor from '../components/MarkdownEditor'
import HasRightSidebar from '../components/HasRightSidebar'
import QuestionHeader from '../components/QuestionHeader'
import Post from '../components/Post'

const Question = (props) => {
  const { t, question } = props
  const { id: questionId, title, answers } = question
  return (
    <Page {...props}>
      <HasRightSidebar>
        <QuestionHeader text={title} />
        <div>
          <Post {...question} />
          <div>
            <h2>{t('answer')}</h2>
            <div>
              <a>
                {t('active')}
              </a>
              <a>
                {t('oldest')}
              </a>
              <a>
                {t('votes')}
              </a>
            </div>
          </div>
          <div>
            {
              answers.map((answer) =>
                <div>
                  <Post {...answer} />
                </div>
              )
            }
          </div>
          <h2>{t('your_answer')}</h2>
          <div>
            <form action="/api/anwser" method="post">
              <input type="hidden" name="questionId" value={questionId} />
              <div>
                <MarkdownEditor id="answer-content" name="content" value="" />
              </div>
              <button type="submit">{t('post_answer')}</button>
            </form>
          </div>
        </div>
        <div>
          <h5>{t('linked')}</h5>
          <h5>{t('related')}</h5>
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
