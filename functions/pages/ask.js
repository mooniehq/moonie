import { withTranslation } from '../i18n'
import Page from '../components/Page'
import MarkdownEditor from '../components/MarkdownEditor'

const Question = ({ t }) => {
  return (
    <Page>
      <h1>{t('create-question')}</h1>
      <form action="/api/question" method="post">
        <input type="text" name="title" />
        <MarkdownEditor name="content" value="" />
        <button type="submit">{t('submit')}</button>
      </form>
    </Page>
  )
}

export default withTranslation('common')(Question)
