import { withTranslation } from '../i18n'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

const Vote = ({ t }) => (
  <h2 className="vote d-flex align-items-center flex-column m-1 text-black-50">
    <div><AiFillCaretUp /></div>
    <div className="fs-title">100</div>
    <div><AiFillCaretDown /></div>
  </h2>
)

Vote.propTypes = {
}

export default withTranslation('common')(Vote)
