import * as React from 'react'
import { withTranslation } from '../../i18n'
import Page from '../../components/hq/Page'

const Home = ({ t }) => {

  return (
    <Page>
    </Page>
  )
}

// HOC for translation
// common is the namespace of the translation file
export default withTranslation('common')(Home)
