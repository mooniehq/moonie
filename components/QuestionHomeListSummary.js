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
    <tr key={`question-${id}`}>
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
          <a className="ui image label">
            <img src="https://avatars0.githubusercontent.com/u/36872529?s=460&v=4"></img>
            Veronika
            <div className="detail" title={t('reputation-score')}>1</div>
          </a>
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
