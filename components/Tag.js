import { withTranslation } from '../i18n'
import {
  Badge
} from 'reactstrap'
import { shape, string } from 'prop-types'

const Tag = ({ t, tag: { label } }) => (
  <Badge color="light" href="#">{label}</Badge>
)

Tag.propTypes = {
  tag: shape({
    label: string
  })
}

export default withTranslation('common')(Tag)
