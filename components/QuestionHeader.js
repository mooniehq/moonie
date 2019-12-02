import { withTranslation } from '../i18n'
import { string } from 'prop-types'
import {
  Button
} from 'reactstrap'

const QuestionHeader = ({ t, text }) => (
  <div>
    <div className="question-header d-flex">
      <h1 className="flex-grow-1 mb-2">
        <a className="question-hyperlink" href="#">{text}</a>
      </h1>
      <div>
        <Button color="primary" href="/ask">{t('ask_question')}</Button>
      </div>
    </div>
    <div className="fs-sm d-flex flex-wrap pb-2 mb-3 bb bc-black-2">
      <div className="text-nowrap mr-3 mb-2" title="2019-12-01 07:35:39Z">
        <span className="text-muted">Asked</span><span> </span>
        <time className="text-dark" dateTime="2019-12-01T07:35:39">today</time>
      </div>
      <div className="text-nowrap mr-3 mb-2">
        <span className="text-muted">Active</span><span> </span>
        <time className="text-dark" dateTime="2019-12-01T07:35:39">today</time>
      </div>
      <div className="text-nowrap mb-2" title="Viewed 20 times">
        <span className="text-muted">Viewed</span><span> </span>
        <span className="text-dark">20 times</span>
      </div>
    </div>
  </div>
)

QuestionHeader.propTypes = {
  text: string
}

export default withTranslation('common')(QuestionHeader)
