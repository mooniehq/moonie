import { withTranslation } from '../i18n'
import { string } from 'prop-types'
import {
  Button
} from 'reactstrap'

const QuestionHeader = ({ t, text }) => (
  <div>
    <div className="question-header grid">
      <h1 className="grid--cell fs-headline1 fl1 ow-break-word mb8">
        <a className="question-hyperlink" href="#">{text}</a>
      </h1>
      <div className="ml12 aside-cta grid--cell">
        <Button color="primary" href="/ask">{t('ask_question')}</Button>
      </div>
    </div>
    <div className="fs-sm grid fw-wrap pb8 mb16 bb bc-black-2">
      <div className="grid--cell ws-nowrap mr16 mb8" title="2019-12-01 07:35:39Z">
        <span className="fc-light mr2">Asked</span><span> </span>
        <time dateTime="2019-12-01T07:35:39">today</time>
      </div>
      <div className="grid--cell ws-nowrap mr16 mb8">
        <span className="fc-light mr2">Active</span><span> </span>
        <time dateTime="2019-12-01T07:35:39">today</time>
      </div>
      <div className="grid--cell ws-nowrap mb8" title="Viewed 20 times">
        <span className="fc-light mr2">Viewed</span><span> </span>
        <span>20 times</span>
      </div>
    </div>
  </div>
)

QuestionHeader.propTypes = {
  text: string
}

export default withTranslation('common')(QuestionHeader)
