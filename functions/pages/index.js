import * as React from 'react'
import { withTranslation } from '../i18n'
import Page from '../components/Page'

const Home = ({ t }) => {

  return (
    <Page>
      <h1>{t('our-homepage')}</h1>
      <ul>
        <li>{t('home')}</li>
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
          <a href="/community">
            {t('communities')}
          </a>
        </li>
        <li>
          <a href="/ask">
            {t('create-question')}
          </a>
        </li>
        <li>
          <a href="/question/1">
            Question 1
          </a>
        </li>
      </ul>
    </Page>
  )
}

// HOC for translation
// common is the namespace of the translation file
export default withTranslation('common')(Home)
