import { withTranslation } from '../../i18n'
import { shape, string, arrayOf } from 'prop-types'
import Page from '../../components/Page'

const Community = ({
  user,
  community: {
    subdomain
  },
  questions,
  t
}) => {
  return (
    <Page>
      <h1>{subdomain}</h1>
      <ul>
        {user &&
        <>
          <li>{user.email}</li>
          <li>
            <a href="/signout">
              {t('sign-out')}
            </a>
          </li>
          <li>
            <a href="/ask">
              {t('create-question')}
            </a>
          </li>
        </>
        }
        {!user &&
        <>
          <li>
            <a href="/signin">
              {t('sign-in')}
            </a>
          </li>
          <li>
            <a href="/signup">
              {t('sign-up')}
            </a>
          </li>
        </>
        }
      </ul>
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

Community.getInitialProps = async ({ query: { user, community, questions } }) => {
  console.log(questions)
  return {
    user,
    community,
    questions
  }
}

Community.propTypes = {
  user: shape({
    email: string
  }),
  community: shape({
    subdomain: string
  }),
  questions: arrayOf(shape({
    title: string,
    content: string
  }))
}

export default withTranslation('common')(Community)
