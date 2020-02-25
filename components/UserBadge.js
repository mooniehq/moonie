import { withTranslation } from '../i18n'

const UserBadge = ({ t }) => (
  <a href="#">
    <div>Aug 11 17 at 19:23</div>
    <div>
      <div><img src="https://avatars0.githubusercontent.com/u/36872529?s=460&v=4" width="40" height="40"></img></div>
      <div>
        <div>User name</div>
        <div>Reputation</div>
      </div>
    </div>
  </a>
)

UserBadge.propTypes = {
}

export default withTranslation('common')(UserBadge)
