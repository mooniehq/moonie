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
import HasRightSidebar from '../components/HasRightSidebar'
import QuestionMiniList from '../components/QuestionMiniList'
import QuestionHeader from '../components/QuestionHeader'

const Home = (props) => {
  const { t, questions } = props
  return (
    <Page {...props}>
      <HasRightSidebar>
        <div></div>
        <div>
          <QuestionHeader text={t('top_questions')} />
          <div className="d-flex justify-content-end">
            <ButtonToolbar>
              <ButtonGroup>
                <Button outline href="#">{t('interesting')}</Button>
                <Button outline href="#">{t('hot')}</Button>
                <Button outline href="#">{t('week')}</Button>
                <Button outline href="#">{t('month')}</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
          <QuestionMiniList questions={questions} />
        </div>
        <div>
          <Card>
            <CardHeader>{t('custom_filters')}</CardHeader>
            <CardBody>
              <a href="#">{t('create_custom_filter')}</a>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>{t('watched_tags')}</CardHeader>
            <CardBody>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>{t('ignored_tags')}</CardHeader>
            <CardBody>
            </CardBody>
          </Card>
        </div>
      </HasRightSidebar>
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
