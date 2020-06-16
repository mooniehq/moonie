import { withTranslation } from '../i18n'

const AskQuestion = ({ t }) => (
  <a className="ui blue button" href="/ask">{t('ask_question')}</a>
)

AskQuestion.propTypes = {
}

export default withTranslation('common')(AskQuestion)
