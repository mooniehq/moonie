import { arrayOf, shape, number, string } from 'prop-types'
import { withTranslation } from '../../i18n'
import Page from '../../components/hq/Page'

const Sites = ({ sites, t }) => {
  return (
    <Page>
      <table>
        <thead>
          <tr key="sites-header">
            <th>#</th>
            <th>{t('site')}</th>
          </tr>
        </thead>
        <tbody>
          {sites.map(({ id, subdomain, url }) => (
            <tr key={`site-${id}`}>
              <td>{id}</td>
              <td>
                <a href={`//${url}`}>
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

Sites.getInitialProps = async ({ query: { sites } }) => {
  return {
    sites
  }
}

Sites.propTypes = {
  sites: arrayOf(shape({
    id: number,
    subdomain: string
  }))
}

export default withTranslation('common')(Sites)
