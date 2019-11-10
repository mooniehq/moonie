import { string } from 'prop-types'
import {
  Card,
  CardBody
} from 'reactstrap'

const StatBadge = ({ href, number, text }) => {
  return (
    <Card>
      <CardBody>
        <a className="d-inline-flex flex-column" href={href}>
          <span className="text-center">{number}</span>
          <span className="text-center">{text}</span>
        </a>
      </CardBody>
    </Card>
  )
}

StatBadge.propTypes = {
  href: string,
  number: string,
  text: string
}

export default StatBadge
