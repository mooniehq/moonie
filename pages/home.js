import { withTranslation } from '../i18n'
import { shape, string, arrayOf } from 'prop-types'
import Page from '../components/Page'
import HasRightSidebar from '../components/HasRightSidebar'
import QuestionHomeList from '../components/QuestionHomeList'
import QuestionHomeListFilter from '../components/QuestionHomeListFilter'
import QuestionHomeListHeader from '../components/QuestionHomeListHeader'
import Card from '../components/Card'

const Home = (props) => {
  const { t, questions } = props
  return (
    <Page {...props}>
      <HasRightSidebar>
        <div></div>
        <div>
          <QuestionHomeListHeader />
          <QuestionHomeListFilter />
          <QuestionHomeList questions={questions} />
        </div>
        <div>
          <Card>
            <div>{t('watched_tags')}</div>
            <div></div>
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
