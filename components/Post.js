import { withTranslation } from '../i18n'
import { string } from 'prop-types'
import Vote from './Vote'
import UserBadge from './UserBadge'
import TagsList from './TagsList'

const Post = ({ t, content }) => {
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
    <div className="d-flex">
      <div className="pr-3">
        <Vote />
      </div>
      <div className="flex-grow">
        <div className="mb-1">
          {content}
        </div>
        <TagsList tags={tags} />
        <div className="d-flex justify-content-between mt-4 fs-13">
          <div className="btn-toolbar post-actions">
            <a href="#">{t('share')}</a>
            <a href="#">{t('edit')}</a>
            <a href="#">{t('flag')}</a>
          </div>
          <div>Aug 11 17 at 19:23</div>
          <UserBadge />
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {
  content: string
}

export default withTranslation('common')(Post)
