import '../css/main.css'
import '../css/bootstrap.min.css'

import { Link, withTranslation } from '../i18n'

function Home ({ t }) {
  return (
    <>
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
    </>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

// HOC for translation
// common is the namespace of the translation file
export default withTranslation('common')(Home)
