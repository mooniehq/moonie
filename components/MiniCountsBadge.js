import { string } from 'prop-types'

const MiniCountsBadge = ({ number, text, title }) => {
  return (
    <div>
      <div title={title}>{number}</div>
      <div>{text}</div>
    </div>
  )
}

MiniCountsBadge.propTypes = {
  number: string,
  text: string,
  title: string
}

export default MiniCountsBadge
