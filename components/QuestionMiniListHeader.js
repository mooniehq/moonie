import { withTranslation } from '../i18n'
import { string } from 'prop-types'
import {
  Button
} from 'reactstrap'

const QuestionMiniListHeader = ({ t, text }) => (
  <div className="d-flex">
    <h1 className="flex-grow-1 fs-headline1">{text}</h1>
    <div>
      <Button color="primary" href="/ask">{t('ask_question')}</Button>
    </div>
  </div>
)

QuestionMiniListHeader.propTypes = {
  text: string
}

export default withTranslation('common')(QuestionMiniListHeader)
