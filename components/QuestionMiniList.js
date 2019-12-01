import { withTranslation } from '../i18n'
import { arrayOf, object } from 'prop-types'
import QuestionNarrowSummary from './QuestionNarrowSummary'

const QuestionMiniList = ({ t, questions }) => {
  return (
    <div className="qlist-wrapper">
      <div className="question-mini-list">
        {questions.map(question => (
          <QuestionNarrowSummary question={question} />
        ))}
      </div>
    </div>
  )
}

QuestionMiniList.propTypes = {
  questions: arrayOf(object)
}

export default withTranslation('common')(QuestionMiniList)
