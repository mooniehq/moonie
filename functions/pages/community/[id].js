import { withTranslation } from '../../i18n'
import { shape, string } from 'prop-types'
import Page from '../../components/Page'

const Community = ({
  community: {
    subdomain
  }
}) => {
  return (
    <Page>
      <h1>{subdomain}</h1>
    </Page>
  )
}

Community.getInitialProps = async ({ query: { community } }) => {
  return {
    community
  }
}

Community.propTypes = {
  community: shape({
    subdomain: string
  })
}

export default withTranslation('common')(Community)
