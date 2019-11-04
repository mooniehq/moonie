import { withTranslation } from '../i18n'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Page from '../components/Page'
import MarkdownEditor from '../components/MarkdownEditor'

const Ask = (props) => {
  const { t } = props
  return (
    <Page {...props}>
      <div>{t('create-question')}</div>
      <Form action="/api/question" method="post">
        <FormGroup>
          <Label for="title">{t('title')}</Label>
          <Input type="text" id="title" name="title" />
        </FormGroup>
        <FormGroup>
          <Label for="content">{t('content')}</Label>
          <MarkdownEditor id="content" name="content" value="" />
        </FormGroup>
        <Button type="submit">{t('submit')}</Button>
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
