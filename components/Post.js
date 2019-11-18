import { withTranslation } from '../i18n'
import {
  Button,
  ButtonToolbar
} from 'reactstrap'
import Vote from './Vote'

const Post = ({ t, children }) => (
  <div className="d-flex">
    <div>
      <Vote />
    </div>
    <div className="flex-fill">
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
          User badge
        </div>
      </div>
    </div>
  </div>
)

Post.propTypes = {
}

export default withTranslation('common')(Post)
