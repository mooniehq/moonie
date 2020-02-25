import { withTranslation } from '../i18n'
import { arrayOf, object } from 'prop-types'
import QuestionHomeListSummary from './QuestionHomeListSummary'

const QuestionHomeList = ({ t, questions }) => {
  return (
    <div>
      {questions.map(question => (
        <QuestionHomeListSummary question={question} />
      ))}
    </div>
  )
}

QuestionHomeList.propTypes = {
  questions: arrayOf(object)
}

export default withTranslation('common')(QuestionHomeList)
