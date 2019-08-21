import { withTranslation } from '../../i18n'
import { shape, string } from 'prop-types'
import Showdown from 'showdown'
import Page from '../../components/Page'
import MarkdownEditor from '../../components/MarkdownEditor'

const Question = ({ question: { id: questionId, title, content }, answers }) => {
  const markdownToHtmlConverter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  })

  const replies = answers.map(answer => {
    const innerHtml = markdownToHtmlConverter.makeHtml(answer.content)
    return (
      <div key={answer.id}>
        <h5>ans {answer.id}</h5>
        <div dangerouslySetInnerHTML={{ __html: innerHtml }}/>
      </div>
    )
  })
  return (
    <Page>
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        {replies}
      </div>
      <div>
        <h2>Send Anwser</h2>
        <form action="/api/anwser" method="post">
          <input type="hidden" name="questionId" value={questionId} />
          <MarkdownEditor name="content" value="" />
          <button type="submit">Send</button>
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
  })
}

export default withTranslation('common')(Question)
