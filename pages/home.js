import { withTranslation } from '../i18n'
import { shape, string, arrayOf } from 'prop-types'
import {
  Button,
  ButtonGroup,
  ButtonToolbar
} from 'reactstrap'
import Page from '../components/Page'
import ThreeColumnContainer from '../components/ThreeColumnContainer'

const Home = (props) => {
  const { t, questions } = props
  return (
    <Page {...props}>
      <ThreeColumnContainer>
        <div></div>
        <div>{t('teams')}</div>
        <div>
          <h1>{t('top-questions')}</h1>
          <div>
            <ButtonToolbar>
              <ButtonGroup>
                <Button>{t('hot')}</Button>
                <Button>{t('week')}</Button>
                <Button>{t('month')}</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
          <div>
            {questions.map(({ id, title }) => (
              <div key={`question-${id}`}>
                <a href={`/question/${id}`}>
                  {title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>{t('widgets')}</div>
      </ThreeColumnContainer>
    </Page>
  )
}

Home.getInitialProps = async ({ query: { user, questions } }) => {
  return {
    user,
    questions
  }
}

Home.propTypes = {
  user: shape({
    email: string
  }),
  questions: arrayOf(shape({
    title: string,
    content: string
  }))
}

export default withTranslation('common')(Home)
