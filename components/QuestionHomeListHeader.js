import { withTranslation } from '../i18n'

const QuestionHomeListHeader = ({ t }) => (
  <h1>{t('top_questions')}</h1>
)

export default withTranslation('common')(QuestionHomeListHeader)
