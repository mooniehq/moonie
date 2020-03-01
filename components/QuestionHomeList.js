import { withTranslation } from '../i18n'
import { arrayOf, object } from 'prop-types'
import QuestionHomeListSummary from './QuestionHomeListSummary'

const QuestionHomeList = ({ t, questions }) => {
  return (
    <table className="ui celled table">
      <tbody>
        {questions.map(question => (
          <QuestionHomeListSummary question={question} />
        ))}
      </tbody>
    </table>
  )
}

QuestionHomeList.propTypes = {
  questions: arrayOf(object)
}

export default withTranslation('common')(QuestionHomeList)
