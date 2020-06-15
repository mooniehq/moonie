import { withTranslation } from '../i18n'

const Vote = ({ t }) => (
  <h2 className="vote flex flex-col items-stretch">
    <button className="text-center">
      <i className="chevron up icon"></i>
    </button>
    <div className="text-center">100</div>
    <button className="text-center">
      <i className="chevron down icon"></i>
    </button>
  </h2>
)

Vote.propTypes = {
}

export default withTranslation('common')(Vote)
