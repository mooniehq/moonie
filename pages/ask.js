import { withTranslation } from '../i18n'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Page from '../components/Page'
import MarkdownEditor from '../components/MarkdownEditor'

const Ask = (props) => {
  const { t } = props
  return (
    <Page {...props}>
      <h1>{t('ask-question')}</h1>
      <Form action="/api/question" method="post">
        <FormGroup>
          <Label for="title">{t('title')}</Label>
          <Input type="text" id="title" name="title" />
        </FormGroup>
        <FormGroup>
          <Label for="content">{t('body')}</Label>
          <MarkdownEditor id="content" name="content" value="" />
        </FormGroup>
        <FormGroup>
          <Label>{t('tags')}</Label>
        </FormGroup>
        <Button type="submit" color="primary">{t('post-question')}</Button>
      </Form>
    </Page>
  )
}

Ask.getInitialProps = async ({ query: { user } }) => {
  return {
    user
  }
}

export default withTranslation('common')(Ask)
