import { withTranslation } from '../i18n'
import { shape, number, string } from 'prop-types'
import MiniCountsBadge from './MiniCountsBadge'
import TagsList from './TagsList'
import UserBadge from './UserBadge'
import AuthorBadge from './AuthorBadge'

const QuestionHomeListSummary = ({ t, question: { id, title } }) => {
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
    <tr className="align-top" key={`question-${id}`}>
      <td>
        <a href={href}>
          <MiniCountsBadge number="0" text={t('votes')} title={t('votes_count', { count: 0 })} />
        </a>
      </td>
      <td>
        <a href={href}>
          <MiniCountsBadge number="0" text={t('answers')} title={t('answers_count', { count: 0 })} />
        </a>
      </td>
      <td>
        <a href={href}>
          <MiniCountsBadge number="3" text={t('views')} title={t('views_count', { count: 3 })} />
        </a>
      </td>
      <td>
        <a href={href}>
          {title}
        </a>
        <div className="flex justify-between">
          <div>
            <TagsList tags={tags} />
          </div>
          <AuthorBadge />
        </div>
      </td>
    </tr>
  )
}

QuestionHomeListSummary.propTypes = {
  question: shape({
    id: number,
    title: string
  })
}

export default withTranslation('common')(QuestionHomeListSummary)
