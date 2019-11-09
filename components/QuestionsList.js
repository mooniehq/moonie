import { withTranslation } from '../i18n'
import { shape, string, arrayOf } from 'prop-types'
import StatBadge from '../components/StatBadge'

const QuestionsList = ({ t, questions }) => {
  return questions.map(({ id, title }) => {
    const href = `/question/${id}`
    return (
      <div className="d-flex" key={`question-${id}`}>
        <StatBadge href={href} number="10" text={t('votes')} />
        <StatBadge href={href} number="10" text={t('answers')} />
        <StatBadge href={href} number="10" text={t('views')} />
        <a href={href}>
          {title}
        </a>
      </div>
    )
  })
}

QuestionsList.propTypes = {
  questions: arrayOf(shape({
    id: string,
    title: string
  }))
}

export default withTranslation('common')(QuestionsList)
