import { withTranslation } from '../i18n'
import Page from '../components/Page'

function SignUp ({ t }) {
  return (
    <Page>
      <div>{t('sign-up')}</div>
      <form action="/signup" method="post">
        <label htmlFor="subdomain">{t('community')}</label>
        <input id="subdomain" name="subdomain" />
        <label htmlFor="email">{t('email')}</label>
        <input id="email" name="email" />
        <label htmlFor="password">{t('password')}</label>
        <input id="password" name="password" />
        <button type="submit">{t('submit')}</button>
      </form>
    </Page>
  )
}

SignUp.getInitialProps = () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(SignUp)
