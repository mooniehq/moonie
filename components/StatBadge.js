import { string } from 'prop-types'

const StatBadge = ({ href, number, text }) => {
  return (
    <a className="d-inline-flex flex-column" href={href}>
      <span>{number}</span>
      <span>{text}</span>
    </a>
  )
}

StatBadge.propTypes = {
  href: string,
  number: string,
  text: string
}

export default StatBadge
