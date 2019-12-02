import { string } from 'prop-types'

const MiniCountsBadge = ({ number, text, title }) => {
  return (
    <div className="mini-counts-badge text-center d-inline-block">
      <div className="text-muted fs-17 mb-1 font-weight-light" title={title}>{number}</div>
      <div className="fs-11 fc-lighter">{text}</div>
    </div>
  )
}

MiniCountsBadge.propTypes = {
  number: string,
  text: string,
  title: string
}

export default MiniCountsBadge
