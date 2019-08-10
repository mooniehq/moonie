import * as React from 'react'
import { Link, withTranslation } from '../i18n'
import Page from '../components/Page'

import MarkdownEditor from '../components/MarkdownEditor'

function Home ({ t }) {

  return (
    <Page>
      <ul>
        <li>{t('home')}</li>
        <li>
          <Link href="/signin">
            <a>{t('sign-in')}</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>{t('sign-up')}</a>
          </Link>
        </li>
      </ul>

      <h1>{t('our-homepage')}</h1>

      <MarkdownEditor value="" />
    </Page>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

// HOC for translation
// common is the namespace of the translation file
export default withTranslation('common')(Home)
