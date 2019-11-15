import { withTranslation } from '../i18n'
import { string } from 'prop-types'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'

const Vote = ({ t, text }) => (
  <h2 className="d-flex align-items-center flex-column">
    <div><FaCaretUp /></div>
    <div>100</div>
    <div><FaCaretDown /></div>
  </h2>
)

Vote.propTypes = {
  text: string
}

export default withTranslation('common')(Vote)
