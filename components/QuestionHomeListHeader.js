import { withTranslation } from '../i18n'
import { string } from 'prop-types'

const QuestionHomeListHeader = ({ t, text }) => (
  <div>
    <h1>{text}</h1>
    <div>
      <a href="/ask">{t('ask_question')}</a>
    </div>
  </div>
)

QuestionHomeListHeader.propTypes = {
  text: string
}

export default withTranslation('common')(QuestionHomeListHeader)
