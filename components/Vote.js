import { withTranslation } from '../i18n'

const Vote = ({ t }) => (
  <h2>
    <i className="chevron up icon"></i>
    <div>100</div>
    <i className="chevron down icon"></i>
  </h2>
)

Vote.propTypes = {
}

export default withTranslation('common')(Vote)
