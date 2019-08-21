import { withTranslation } from '../../i18n'
import { shape, string, arrayOf } from 'prop-types'
import Page from '../../components/Page'

const Community = ({
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

Community.getInitialProps = async ({ query: { community, questions } }) => {
  return {
    community,
    questions
  }
}

Community.propTypes = {
  community: shape({
    subdomain: string
  }),
  questions: arrayOf(shape({
    title: string,
    content: string
  }))
}

export default withTranslation('common')(Community)
