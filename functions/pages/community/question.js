import { withTranslation } from '../../i18n'
import { shape, string, array } from 'prop-types'
import Page from '../../components/Page'
import MarkdownEditor from '../../components/MarkdownEditor'
import Answer from '../../components/Answer'

const Question = ({ question: { id: questionId, title, content }, answers }) => {

  const replies = answers.map(({ id: answerId, content, comments }) =>
    <Answer id={answerId} content={content} comments={comments} />
  )
  return (
    <Page>
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        {replies}
      </div>
      <div>
        <h2>Post your anwser</h2>
        <form action="/api/anwser" method="post">
          <input type="hidden" name="questionId" value={questionId} />
          <MarkdownEditor name="content" value="" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Page>
  )
}

Question.getInitialProps = async ({ query: { question, answers } }) => {
  console.log(question)
  return {
    question,
    answers
  }
}

Question.propTypes = {
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
