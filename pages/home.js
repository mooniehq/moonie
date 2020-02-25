import { withTranslation } from '../i18n'
import { shape, string, arrayOf } from 'prop-types'
import Page from '../components/Page'
import HasRightSidebar from '../components/HasRightSidebar'
import QuestionHomeList from '../components/QuestionHomeList'
import QuestionHomeListHeader from '../components/QuestionHomeListHeader'
import QuestionHomeListFilter from '../components/QuestionHomeListFilter'

const Home = (props) => {
  const { t, questions } = props
  return (
    <Page {...props}>
      <HasRightSidebar>
        <div>
          <QuestionHomeListHeader text={t('top_questions')} />
          <QuestionHomeListFilter />
          <QuestionHomeList questions={questions} />
        </div>
        <div>
          <div>{t('watched_tags')}</div>
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
