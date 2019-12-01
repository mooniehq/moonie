import { withTranslation } from '../i18n'
import { shape, string, arrayOf } from 'prop-types'
import {
  Card,
  CardBody,
  CardHeader
} from 'reactstrap'
import Page from '../components/Page'
import HasRightSidebar from '../components/HasRightSidebar'
import QuestionMiniList from '../components/QuestionMiniList'
import QuestionMiniListHeader from '../components/QuestionMiniListHeader'
import QuestionMiniListFilter from '../components/QuestionMiniListFilter'

const Home = (props) => {
  const { t, questions } = props
  return (
    <Page {...props}>
      <HasRightSidebar>
        <div></div>
        <div>
          <QuestionMiniListHeader text={t('top_questions')} />
          <QuestionMiniListFilter />
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
