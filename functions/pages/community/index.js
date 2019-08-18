import { arrayOf, shape, number, string } from 'prop-types'
import { withTranslation } from '../../i18n'
import Page from '../../components/Page'

const Communities = ({ communities, t }) => {
  return (
    <Page>
      <table>
        <thead>
          <tr key="communities-header">
            <th>#</th>
            <th>{t('community')}</th>
          </tr>
        </thead>
        <tbody>
          {communities.map(({ id, subdomain }) => (
            <tr key={`community-${id}`}>
              <td>{id}</td>
              <td>
                <a href={`/community/${id}`}>
                  {subdomain}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  )
}

Communities.getInitialProps = async ({ query: { communities } }) => {
  return {
    communities
  }
}

Communities.propTypes = {
  communities: arrayOf(shape({
    id: number,
    subdomain: string
  }))
}

export default withTranslation('common')(Communities)
