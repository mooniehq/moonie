import { withTranslation } from '../i18n'

const UserBadge = ({ t }) => (
  <div>
    <div>Aug 11 17 at 19:23</div>
    <a className="ui image label">
      <img src="https://avatars0.githubusercontent.com/u/36872529?s=460&v=4"></img>
      <div className="detail">
        <div>Alex</div>
        <div>123</div>
      </div>
    </a>
  </div>
)

UserBadge.propTypes = {
}

export default withTranslation('common')(UserBadge)
