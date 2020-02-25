import { withTranslation } from '../i18n'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

const Vote = ({ t }) => (
  <h2>
    <div><AiFillCaretUp /></div>
    <div>100</div>
    <div><AiFillCaretDown /></div>
  </h2>
)

Vote.propTypes = {
}

export default withTranslation('common')(Vote)
