import { withTranslation } from '../i18n'
import { shape, string } from 'prop-types'
import {
  Badge
} from 'reactstrap'

const Tag = ({ t, tag: { label } }) => (
  <Badge color="info" href="#">{label}</Badge>
)

Tag.propTypes = {
  tag: shape({
    label: string
  })
}

export default withTranslation('common')(Tag)
