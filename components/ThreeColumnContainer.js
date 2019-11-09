import {
  Col,
  Row
} from 'reactstrap'

const ThreeColumnContainer = (props) => {
  const [top, main, right] = props.children
  return (
    <>
      <Col>
        <Row>
          <Col>{top}</Col>
        </Row>
        <Row>
          <Col sm="12" md="10" xl="9">{main}</Col>
          <Col sm="12" md="4" xl="3">{right}</Col>
        </Row>
      </Col>
    </>
  )
}

export default ThreeColumnContainer
