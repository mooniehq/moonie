import { withTranslation, Link } from '../i18n'
import Page from '../components/Page'
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
          {communities.map((community, index) => (
            <tr key={community.id}>
              <td>{index + 1}</td>
              <td>
                <Link 
                  href={`/communities/[id]`} as ={`/communities/${community.id}`}>
                    {community.subdomain}
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

export default withTranslation(['common'])(CommunityList)
