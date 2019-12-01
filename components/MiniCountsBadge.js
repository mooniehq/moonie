import { string } from 'prop-types'

const MiniCountsBadge = ({ number, text, title }) => {
  return (
    <div className="mini-counts-badge">
      <div className="mini-counts">
        <span title={title}>{number}</span>
      </div>
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
