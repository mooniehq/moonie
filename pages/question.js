import { withTranslation } from '../i18n'
import { shape, number, string, arrayOf } from 'prop-types'
import Page from '../components/Page'
import MarkdownEditor from '../components/MarkdownEditor'
import HasRightSidebar from '../components/HasRightSidebar'
import QuestionHeader from '../components/QuestionHeader'
import Post from '../components/Post'
import Card from '../components/Card'

const Question = (props) => {
  const { t, question } = props
  const { id: questionId, title, answers } = question
  return (
    <Page {...props}>
      <HasRightSidebar>
        <QuestionHeader text={title} />
        <div className="min-w-0 flex flex-col">
          <div className="border-gray-t py-5 flex-1">
            <Post {...question} />
          </div>
          <div>
            <h2>{t('answer')}</h2>
          </div>
          <div>
            {
              answers.map((answer) =>
                <div className="border-gray-t py-5">
                  <Post {...answer} />
                </div>
              )
            }
          </div>
          <h2 className="border-gray-t py-5">{t('your_answer')}</h2>
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
          <Card>
            <div>{t('linked')}</div>
            <div></div>
          </Card>
          <Card>
            <div>{t('related')}</div>
            <div></div>
          </Card>
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
