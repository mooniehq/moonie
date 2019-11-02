import { withTranslation } from '../i18n'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Page from '../components/Page'

const SignIn = (props) => {
  const { t } = props
  return (
    <Page>
      <div>{t('sign-in')}</div>
      <Form action="/api/signin" method="post">
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

export default withTranslation('common')(SignIn)
