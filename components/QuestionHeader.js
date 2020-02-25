import { withTranslation } from '../i18n'
import { string } from 'prop-types'

const QuestionHeader = ({ t, text }) => (
  <div>
    <div>
      <h1>
        <a href="#">{text}</a>
      </h1>
      <div>
        <a href="/ask">{t('ask_question')}</a>
      </div>
    </div>
    <div>
      <div title="2019-12-01 07:35:39Z">
        <span>Asked</span><span> </span>
        <time dateTime="2019-12-01T07:35:39">today</time>
      </div>
      <div>
        <span>Active</span><span> </span>
        <time dateTime="2019-12-01T07:35:39">today</time>
      </div>
      <div title="Viewed 20 times">
        <span>Viewed</span><span> </span>
        <span>20 times</span>
      </div>
    </div>
  </div>
)

QuestionHeader.propTypes = {
  text: string
}

export default withTranslation('common')(QuestionHeader)
