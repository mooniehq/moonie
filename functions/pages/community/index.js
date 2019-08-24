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
  let email
  if (user) {
    email = user.email
  }
  return (
    <Page>
      <h1>{subdomain}</h1>
      {
        email &&
        <p>{user.email}</p>
      }
      <ul>
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
      </ul>
      <table>
        <thead>
          <tr key="questions-header">
            <th>#</th>
            <th>{t('question')}</th>
          </tr>
          <tbody>
            {questions.map(({ id, title }) => (
              <tr key={`question-${id}`}>
                <td>{id}</td>
                <td>
                  <a href={`/question/${id}`}>
                    {title}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </thead>
      </table>
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
