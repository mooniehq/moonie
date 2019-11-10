import {
  Col
} from 'reactstrap'

const Center = ({ children }) => {
  return (
    <>
      <Col className="d-flex justify-content-center">
        {children}
      </Col>
    </>
  )
}

export default Center
