import { withTranslation } from '../../i18n'
import { shape, string } from 'prop-types'
import Page from '../../components/Page'

function Question ({ question: { title, content } }) {
  return (
    <Page>
      <h1>{title}</h1>
      <p>{content}</p>
    </Page>
  )
}

Question.getInitialProps = async ({ query: { question } }) => {
  console.log(question)
  return {
    question
  }
}

Question.propTypes = {
  question: shape({
    title: string,
    content: string
  })
}

export default withTranslation('common')(Question)
