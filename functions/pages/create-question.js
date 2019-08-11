import { withTranslation } from '../i18n'
import Page from '../components/Page'
import MarkdownEditor from '../components/MarkdownEditor'

const Question = ({ t }) => {
  return (
    <Page>
      <h1>{t('create-question')}</h1>
      <form action="/create-question" method="post">
        <MarkdownEditor name="content" value="" />
        <button type="submit">{t('submit')}</button>
      </form>
    </Page>
  )
}

Question.getInitialProps = () => ({
  namespacesRequired: ['common']
})

export default withTranslation(['common'])(Question)
