import { withTranslation } from '../../i18n'
import { shape, string, arrayOf } from 'prop-types'
import Page from '../../components/site/Page'

const Site = ({
  user,
  site: {
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

Site.getInitialProps = async ({ query: { user, site, questions } }) => {
  console.log(questions)
  return {
    user,
    site,
    questions
  }
}

Site.propTypes = {
  user: shape({
    email: string
  }),
  site: shape({
    subdomain: string
  }),
  questions: arrayOf(shape({
    title: string,
    content: string
  }))
}

export default withTranslation('common')(Site)
