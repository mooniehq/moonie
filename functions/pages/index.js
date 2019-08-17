import * as React from 'react'
import { Link, withTranslation } from '../i18n'
import Page from '../components/Page'

function Home ({ t }) {

  return (
    <Page>
      <h1>{t('our-homepage')}</h1>
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
        <li>
          <Link href="/communities">
            <a>{t('communities')}</a>
          </Link>
        </li>
        <li>
          <Link href="/create-question">
            <a>{t('create-question')}</a>
          </Link>
        </li>
        <li>
          <Link href="/question/1" as ="/question/1">
            <a>question 1</a>
          </Link>
        </li>
      </ul>
    </Page>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

// HOC for translation
// common is the namespace of the translation file
export default withTranslation('common')(Home)
