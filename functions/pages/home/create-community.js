import { withTranslation } from '../../i18n'
import Page from '../../components/Page'

const SignUp = ({ t }) => {
  return (
    <Page>
      <h1>{t('create-community')}</h1>
      <form action="/api/signup" method="post">
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

export default withTranslation('common')(SignUp)
