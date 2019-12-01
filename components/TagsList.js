import { withTranslation } from '../i18n'
import { arrayOf, shape, string } from 'prop-types'
import Tag from './Tag'

const TagsList = ({ t, tags }) => {
  return (
    <div>
      {tags.map(tag => (
        <Tag tag={tag} />
      ))}
    </div>
  )
}

TagsList.propTypes = {
  tags: arrayOf(shape({
    label: string
  }))
}

export default withTranslation('common')(TagsList)
