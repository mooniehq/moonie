import * as React from 'react'
import { withTranslation } from '../../i18n'
import Page from '../../components/Page'

const Home = ({ t }) => {

  return (
    <Page>
      <h1>{t('our-homepage')}</h1>
      <ul>
        <li>
          <a href="/create-community">
            {t('create-community')}
          </a>
        </li>
        <li>
          <a href="/communities">
            {t('communities')}
          </a>
        </li>
      </ul>
    </Page>
  )
}

// HOC for translation
// common is the namespace of the translation file
export default withTranslation('common')(Home)
