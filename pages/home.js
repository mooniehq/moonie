import { withTranslation } from '../i18n'
import { shape, string, arrayOf } from 'prop-types'
import Page from '../components/Page'

const Home = (props) => {
  const { questions } = props
  return (
    <Page {...props}>
      <ul>
        {questions.map(({ id, title }) => (
          <li key={`question-${id}`}>
            <a href={`/question/${id}`}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </Page>
  )
}

Home.getInitialProps = async ({ query: { user, questions } }) => {
  return {
    user,
    questions
  }
}

Home.propTypes = {
  user: shape({
    email: string
  }),
  questions: arrayOf(shape({
    title: string,
    content: string
  }))
}

export default withTranslation('common')(Home)
