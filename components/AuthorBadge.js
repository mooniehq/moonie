import { withTranslation } from '../i18n'
import { string } from 'prop-types'
import UserBadge from './UserBadge'

const AuthorBadge = ({ t, href }) => (
  <div className="author-badge">
    <a className="time" href={href}><span title="2019-12-01 07:16:24Z">10 mins ago</span></a><span> </span>
    <UserBadge />
  </div>
)

AuthorBadge.propTypes = {
  href: string
}

export default withTranslation('common')(AuthorBadge)
