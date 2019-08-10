import * as React from 'react'
// import MarkdownEditor from 'react-mde'
// import 'react-mde/lib/styles/css/react-mde-all.css'
// import * as Showdown from 'showdown'
import { Link, withTranslation } from '../i18n'
import Page from '../components/Page'

function Home ({ t }) {
  // const markdownToHtmlConverter = new Showdown.Converter({
  //   tables: true,
  //   simplifiedAutoLink: true,
  //   strikethrough: true,
  //   tasklists: true
  // })
  // const [markdownContent, setMarkdownContent] = React.useState('')
  // const [selectedMardownMode, setSelectedMarkdownMode] = React.useState('write')
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

      {/* <div>
        <MarkdownEditor
          value = {markdownContent}
          onChange = {setMarkdownContent}
          selectedTab = {selectedMardownMode}
          onTabChange = {setSelectedMarkdownMode}
          generateMarkdownPreview = {markdown =>
            Promise.resolve(markdownToHtmlConverter.makeHtml(markdown))
          }
        />
      </div> */}
    </Page>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

// HOC for translation
// common is the namespace of the translation file
export default withTranslation('common')(Home)
