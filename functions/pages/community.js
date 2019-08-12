import Page from '../components/Page'
import fetch from 'isomorphic-unfetch'

const Community = ( {community} ) => {
  return (
    <div>
      {community.subdomain}
    </div>
  )
}

Community.getInitialProps = async (context) => {
  const {id} = context.query
  const res = await fetch(`/api/communities/${id}`)
  const community = await res.json()

  return { 
    community,
    namespacesRequired: ['common']
  }
}

export default Community