import { withTranslation } from '../i18n'
import { shape, number, string } from 'prop-types'
import MiniCountsBadge from './MiniCountsBadge'
import TagsList from './TagsList'

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
    <div key={`question-${id}`}>
      <a href={href}>
        <MiniCountsBadge number="0" text={t('votes')} title={t('votes_count', { count: 0 })} />
        <MiniCountsBadge number="0" text={t('answers')} title={t('answers_count', { count: 0 })} />
        <MiniCountsBadge number="3" text={t('views')} title={t('views_count', { count: 3 })} />
      </a>
      <div>
        <h3>
          <a href={href}>
            {title}
          </a>
        </h3>
        <div>
          <TagsList tags={tags} />
        </div>
        <div>
          <a href={href}>asked <span title="2019-12-01 07:16:24Z">10 mins ago</span></a><span> </span>
          <a href="/users/12462934/arul">Arul</a><span> </span>
          <span title={t('reputation-score')}>1</span>
        </div>
      </div>
    </div>
  )
}

QuestionHomeListSummary.propTypes = {
  question: shape({
    id: number,
    title: string
  })
}

export default withTranslation('common')(QuestionHomeListSummary)
