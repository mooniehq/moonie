import { withTranslation } from '../i18n'
import { shape, string, arrayOf } from 'prop-types'
import StatBadge from '../components/StatBadge'
import TagsList from './TagsList'

const QuestionsList = ({ t, questions }) => {
  return questions.map(({ id, title }) => {
    const href = `/question/${id}`
    const tags = [
      {
        label: 'java'
      },
      {
        label: 'database'
      },
      {
        label: 'api'
      }
    ]
    return (
      <div className="d-flex" key={`question-${id}`}>
        <StatBadge href={href} number="10" text={t('votes')} />
        <StatBadge href={href} number="10" text={t('answers')} />
        <StatBadge href={href} number="10" text={t('views')} />
        <div>
          <a href={href}>
            {title}
          </a>
          <TagsList tags={tags} />
        </div>
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
