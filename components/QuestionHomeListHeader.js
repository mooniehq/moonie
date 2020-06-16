import { withTranslation } from '../i18n'
import AskQuestion from './AskQuestion'

const QuestionHomeListHeader = ({ t }) => (
  <div className="flex">
    <h1 className="flex-1">
      {t('top_questions')}
    </h1>
    <div>
      <AskQuestion />
    </div>
  </div>
)

export default withTranslation('common')(QuestionHomeListHeader)
