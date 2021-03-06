import { withTranslation } from '../i18n'
import { string } from 'prop-types'

const QuestionHeader = ({ t, text }) => (
  <div>
    <h1>{text}</h1>
    <div className="flex">
      <div className="mr-5" title="2019-12-01 07:35:39Z">
        <span className="text-gray-600">Asked</span><span> </span>
        <time dateTime="2019-12-01T07:35:39">today</time>
      </div>
      <div className="mr-5">
        <span className="text-gray-600">Active</span><span> </span>
        <time dateTime="2019-12-01T07:35:39">today</time>
      </div>
      <div className="mr-5" title="Viewed 20 times">
        <span className="text-gray-600">Viewed</span><span> </span>
        <span>20 times</span>
      </div>
    </div>
  </div>
)

QuestionHeader.propTypes = {
  text: string
}

export default withTranslation('common')(QuestionHeader)
