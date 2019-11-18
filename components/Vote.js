import { withTranslation } from '../i18n'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'

const Vote = ({ t }) => (
  <h2 className="d-flex align-items-center flex-column">
    <div><FaCaretUp /></div>
    <div>100</div>
    <div><FaCaretDown /></div>
  </h2>
)

Vote.propTypes = {
}

export default withTranslation('common')(Vote)
