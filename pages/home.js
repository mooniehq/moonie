import { withTranslation } from '../i18n'
import { shape, string, arrayOf } from 'prop-types'
import Page from '../components/Page'
import HasRightSidebar from '../components/HasRightSidebar'
import QuestionHomeList from '../components/QuestionHomeList'
import QuestionHomeListFilter from '../components/QuestionHomeListFilter'
import QuestionHomeListHeader from '../components/QuestionHomeListHeader'

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
          <div>{t('watched_tags')}</div>
          <div className="ui card">
            <div className="content">
              <div className="header">Project Timeline</div>
            </div>
            <div className="content">
              <h4 className="ui sub header">Activity</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary">
                      <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
                    </div>
                  </div>
                </div>
                <div className="event">
                  <div className="content">
                    <div className="summary">
                      <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
                    </div>
                  </div>
                </div>
                <div className="event">
                  <div className="content">
                    <div className="summary">
                      <a>Helen Troy</a> added two pictures
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="extra content">
              <button className="ui button">Join Project</button>
            </div>
          </div>
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
