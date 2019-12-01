import { withTranslation } from '../i18n'
import { shape, string } from 'prop-types'

const Tag = ({ t, tag: { label } }) => (
  <a className="post-tag" href="#">{label}</a>
)

Tag.propTypes = {
  tag: shape({
    label: string
  })
}

export default withTranslation('common')(Tag)
