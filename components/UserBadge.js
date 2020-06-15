import { withTranslation } from '../i18n'

const UserBadge = ({ t }) => (
  <a className="ui image label">
    <img src="https://avatars0.githubusercontent.com/u/36872529?s=460&v=4"></img>
    Veronika
    <div className="detail" title={t('reputation-score')}>1</div>
  </a>
)

UserBadge.propTypes = {
}

export default withTranslation('common')(UserBadge)
