import { withTranslation } from '../i18n'
import Page from '../components/Page'
import MarkdownEditor from '../components/MarkdownEditor'
import HasRightSidebar from '../components/HasRightSidebar'

const Ask = (props) => {
  const { t } = props
  return (
    <Page {...props}>
      <HasRightSidebar>
        <div></div>
        <div>
          <h1>{t('ask_question')}</h1>
          <form action="/api/question" method="post">
            <div>
              <label htmlFor="title">{t('title')}</label>
              <input type="text" id="title" name="title" />
            </div>
            <div>
              <label htmlFor="content">{t('body')}</label>
              <MarkdownEditor id="content" name="content" value="" />
            </div>
            <div>
              <label>{t('tags')}</label>
            </div>
            <button type="submit">{t('post_question')}</button>
          </form>
        </div>
      </HasRightSidebar>
    </Page>
  )
}

Ask.getInitialProps = async ({ query: { user } }) => {
  return {
    user
  }
}

export default withTranslation('common')(Ask)
