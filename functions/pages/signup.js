import { withTranslation } from '../i18n'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Page from '../components/Page'

const SignUp = (props) => {
  const { t } = props
  return (
    <Page {...props}>
      <div>{t('sign-up')}</div>
      <Form action="/api/signup" method="post">
        <FormGroup>
          <Label for="email">{t('email')}</Label>
          <Input type="email" id="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">{t('password')}</Label>
          <Input type="password" id="password" name="password" />
        </FormGroup>
        <Button type="submit">{t('submit')}</Button>
      </Form>
    </Page>
  )
}

export default withTranslation('common')(SignUp)
