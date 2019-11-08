import {
  Col,
  Row
} from 'reactstrap'

const ThreeColumnContainer = (props) => {
  const [top, left, main, right] = props.children
  return (
    <>
      <Col sm="12" md="3" xl="2">{left}</Col>
      <Col sm="12" md="9" xl="10">
        <Row>
          <Col>{top}</Col>
        </Row>
        <Row>
          <Col sm="12" md="9" xl="10">{main}</Col>
          <Col sm="12" md="3" xl="2">{right}</Col>
        </Row>
      </Col>
    </>
  )
}

export default ThreeColumnContainer
