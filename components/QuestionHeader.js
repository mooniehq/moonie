import { withTranslation } from '../i18n'
import { string } from 'prop-types'
import {
  Button
} from 'reactstrap'

const QuestionHeader = ({ t, text }) => (
  <div>
    <div className="question-header d-flex flex-row flex-nowrap justify-content-between font-weight-normal">
      <h1 className="flex-grow-1 mb-2">
        <a className="question-hyperlink mb-0" href="#">{text}</a>
      </h1>
      <div>
        <Button color="primary" href="/ask">{t('ask_question')}</Button>
      </div>
    </div>
    <div className="d-flex flex-wrap pb-2 mb-3 bb bc-black-2 fs-13">
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
