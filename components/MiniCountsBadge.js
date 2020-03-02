import { string } from 'prop-types'

const MiniCountsBadge = ({ number, text, title }) => {
  return (
    <div className="flex flex-col items-center">
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
