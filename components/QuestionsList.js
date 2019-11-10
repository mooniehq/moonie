import { withTranslation } from '../i18n'
import { arrayOf, object } from 'prop-types'
import QuestionSummary from './QuestionSummary'

const QuestionsList = ({ t, questions }) => {
  return questions.map(question => (
    <QuestionSummary question={question} />
  ))
}

QuestionsList.propTypes = {
  questions: arrayOf(object)
}

export default withTranslation('common')(QuestionsList)
