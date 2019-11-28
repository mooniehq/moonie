import { withTranslation } from '../i18n'
import { string } from 'prop-types'
import {
  Button,
  Row
} from 'reactstrap'

const QuestionHeader = ({ t, text }) => (
  <Row className="d-flex">
    <div className="flex-fill">
      <h1>{text}</h1>
    </div>
    <div>
      <Button color="primary" href="/ask">{t('ask-question')}</Button>
    </div>
  </Row>
)

QuestionHeader.propTypes = {
  text: string
}

export default withTranslation('common')(QuestionHeader)
