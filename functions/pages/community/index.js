import { withTranslation } from '../../i18n'
import { shape, string } from 'prop-types'
import Page from '../../components/Page'

const Community = ({
  user,
  community: {
    subdomain
  },
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
    </Page>
  )
}

Community.getInitialProps = async ({ query: { user, community } }) => {
  return {
    user,
    community
  }
}

Community.propTypes = {
  user: shape({
    email: string
  }),
  community: shape({
    subdomain: string
  })
}

export default withTranslation('common')(Community)
