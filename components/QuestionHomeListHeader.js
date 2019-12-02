import { withTranslation } from '../i18n'
import { string } from 'prop-types'
import {
  Button
} from 'reactstrap'

const QuestionHomeListHeader = ({ t, text }) => (
  <div className="question-home-list-header d-flex">
    <h1 className="flex-grow-1">{text}</h1>
    <div>
      <Button color="primary" href="/ask">{t('ask_question')}</Button>
    </div>
  </div>
)

QuestionHomeListHeader.propTypes = {
  text: string
}

export default withTranslation('common')(QuestionHomeListHeader)
