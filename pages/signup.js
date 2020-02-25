import { withTranslation } from '../i18n'
import Page from '../components/Page'
import Center from '../components/Center'

const SignUp = (props) => {
  const { t } = props
  return (
    <Page {...props}>
      <Center>
        <div>
          <form action="/api/signup" method="post">
            <div>
              <label htmlFor="displayName">{t('display_name')}</label>
              <input type="text" id="displayName" name="displayName" />
            </div>
            <div>
              <label htmlFor="email">{t('email')}</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">{t('password')}</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">{t('sign_up')}</button>
          </form>
        </div>
      </Center>
    </Page>
  )
}

export default withTranslation('common')(SignUp)
