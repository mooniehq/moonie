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
    <div className="question-summary narrow w-100 d-flex overflow-hidden mw-100" key={`question-${id}`}>
      <a className="cp d-flex flex-nowrap align-items-start flex-shrink-0 align-top pr-2" href={href}>
        <MiniCountsBadge number="0" text={t('votes')} title={t('votes_count', { count: 0 })} />
        <MiniCountsBadge number="0" text={t('answers')} title={t('answers_count', { count: 0 })} />
        <MiniCountsBadge number="3" text={t('views')} title={t('views_count', { count: 3 })} />
      </a>
      <div className="m-0 flex-grow-1 overflow-hidden w-auto">
        <h3>
          <a className="question-hyperlink mb-5" href={href}>
            {title}
          </a>
        </h3>
        <div className="float-left">
          <TagsList tags={tags} />
        </div>
        <div className="float-right fs-12">
          <a className="fc-lighter" href={href}>asked <span title="2019-12-01 07:16:24Z">10 mins ago</span></a><span> </span>
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
