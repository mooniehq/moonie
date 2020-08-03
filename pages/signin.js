import { withTranslation } from '../i18n'
import Page from '../components/Page'
import Center from '../components/Center'
import Card from '../components/Card'

const SignIn = (props) => {
  const { t } = props
  return (
    <Page>
      <Center>
        <Card>
          <form className="ui form" action="/api/signin" method="post">
            <div className="field">
              <label htmlFor="email">{t('email')}</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="field">
              <label htmlFor="password">{t('password')}</label>
              <input type="password" id="password" name="password" />
            </div>
            <button className="ui button" type="submit">{t('log_in')}</button>
          </form>
        </Card>
      </Center>
    </Page>
  )
}

export default withTranslation('common')(SignIn)
