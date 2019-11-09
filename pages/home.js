import { withTranslation } from '../i18n'
import { shape, string, arrayOf } from 'prop-types'
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardHeader
} from 'reactstrap'
import Page from '../components/Page'
import ThreeColumnContainer from '../components/ThreeColumnContainer'
import QuestionsList from '../components/QuestionsList'
import QuestionHeader from '../components/QuestionHeader'

const Home = (props) => {
  const { t, questions } = props
  return (
    <Page {...props}>
      <ThreeColumnContainer>
        <div></div>
        <div>
          <QuestionHeader text={t('top-questions')} />
          <div className="d-flex justify-content-end">
            <ButtonToolbar>
              <ButtonGroup>
                <Button outline href="#">{t('hot')}</Button>
                <Button outline href="#">{t('week')}</Button>
                <Button outline href="#">{t('month')}</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
          <div>
            <QuestionsList questions={questions} />
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>{t('custom-filters')}</CardHeader>
            <CardBody>
              <a href="#">{t('create-custom-filter')}</a>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>{t('watched-tags')}</CardHeader>
            <CardBody>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>{t('ignored-tags')}</CardHeader>
            <CardBody>
            </CardBody>
          </Card>
        </div>
      </ThreeColumnContainer>
    </Page>
  )
}

Home.getInitialProps = async ({ query: { user, questions } }) => {
  return {
    user,
    questions
  }
}

Home.propTypes = {
  user: shape({
    email: string
  }),
  questions: arrayOf(shape({
    title: string,
    content: string
  }))
}

export default withTranslation('common')(Home)
