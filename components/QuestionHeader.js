import { withTranslation } from '../i18n'
import { string } from 'prop-types'
import {
  Button,
  Col,
  Row
} from 'reactstrap'

const QuestionHeader = ({ t, text }) => (
  <Row>
    <Col xs="auto" className="mr-auto">
      <h1>{text}</h1>
    </Col>
    <Col xs="auto">
      <Button color="success" href="#">{t('ask-question')}</Button>
    </Col>
  </Row>
)

QuestionHeader.propTypes = {
  text: string
}

export default withTranslation('common')(QuestionHeader)
