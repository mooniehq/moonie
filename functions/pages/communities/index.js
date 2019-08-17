import { arrayOf, shape, number, string } from 'prop-types'
import { withTranslation, Link } from '../../i18n'
import Page from '../../components/Page'
import fetch from 'isomorphic-unfetch'

const CommunityList = ({ communities, t }) => {
  return (
    <Page>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>{t('community')}</th>
          </tr>
        </thead>
        <tbody>
          {communities.map(({ id, subdomain }, index) => (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>
                <Link
                  href={`/communities/[id]`} as ={`/communities/${id}`}>
                  {subdomain}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  )
}

CommunityList.getInitialProps = async () => {
  const res = await fetch('/api/communities')
  const data = await res.json()

  return {
    communities: data,
    namespacesRequired: ['common']
  }
}

CommunityList.propTypes = {
  communities: arrayOf(shape({
    id: number,
    subdomain: string
  }))
}

export default withTranslation(['common'])(CommunityList)
