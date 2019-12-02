import { string } from 'prop-types'

const MiniCountsBadge = ({ number, text, title }) => {
  return (
    <div className="mini-counts-badge text-center">
      <div className="mini-counts">
        <span className="text-muted" title={title}>{number}</span>
      </div>
      <div className="text-black-50">{text}</div>
    </div>
  )
}

MiniCountsBadge.propTypes = {
  number: string,
  text: string,
  title: string
}

export default MiniCountsBadge
