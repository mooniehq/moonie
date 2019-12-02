import { withTranslation } from '../i18n'
import Vote from './Vote'
import UserBadge from './UserBadge'

const Post = ({ t, children }) => (
  <div className="d-flex">
    <div className="pr-3">
      <Vote />
    </div>
    <div className="flex-grow">
      <div>
        {children}
      </div>
      <div className="d-flex">
        <div className="flex-fill">
          <div className="btn-toolbar">
            <a href="#">{t('share')}</a>
            <a href="#">{t('edit')}</a>
            <a href="#">{t('flag')}</a>
          </div>
        </div>
        <div>
          <UserBadge />
        </div>
      </div>
    </div>
  </div>
)

Post.propTypes = {
}

export default withTranslation('common')(Post)
