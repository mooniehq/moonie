import { withTranslation } from '../i18n'

const UserBadge = ({ t }) => (
  <div>
    <div>Aug 11 '17 at 19:23</div>
    <div className="d-flex">
      <div><img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle"></img></div>
      <div>
        <div>User name</div>
      </div>
    </div>
  </div>
)

UserBadge.propTypes = {
}

export default withTranslation('common')(UserBadge)