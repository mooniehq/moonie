import { withTranslation } from '../i18n'
import Page from '../components/Page'
import Center from '../components/Center'

const SignIn = (props) => {
  const { t } = props
  return (
    <Page>
      <Center>
        <div>
          <form action="/api/signin" method="post">
            <div>
              <label htmlFor="email">{t('email')}</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">{t('password')}</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">{t('log_in')}</button>
          </form>
        </div>
      </Center>
    </Page>
  )
}

export default withTranslation('common')(SignIn)
