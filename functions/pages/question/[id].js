import { withTranslation } from '../../i18n'
import { shape, string } from 'prop-types'
import Page from '../../components/Page'
import { useRouter } from 'next/router'

function Question () {
  const { query: { question: { title, content } } } = useRouter()
  console.log(title)
  return (
    <Page>
      <h1>{title}</h1>
      <p>{content}</p>
    </Page>
  )
}

Question.propTypes = {
  question: shape({
    title: string,
    content: string
  })
}

export default withTranslation('common')(Question)
