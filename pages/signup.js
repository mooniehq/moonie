import { withTranslation } from '../i18n'
import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import Page from '../components/Page'
import Center from '../components/Center'

const SignUp = (props) => {
  const { t } = props
  return (
    <Page {...props}>
      <Center>
        <Card>
          <CardBody>
            <Form action="/api/signup" method="post">
              <FormGroup>
                <Label for="displayName">{t('display_name')}</Label>
                <Input type="text" id="displayName" name="displayName" />
              </FormGroup>
              <FormGroup>
                <Label for="email">{t('email')}</Label>
                <Input type="email" id="email" name="email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">{t('password')}</Label>
                <Input type="password" id="password" name="password" />
              </FormGroup>
              <Button type="submit" color="primary">{t('sign_up')}</Button>
            </Form>
          </CardBody>
        </Card>
      </Center>
    </Page>
  )
}

export default withTranslation('common')(SignUp)
