import Head from 'next/head'
import { metaData as meta } from '../../../data/metaData'
import Layout from '../../../components/Layout'
import List from '../../../components/List'
import restURIs from '../../../data/restURIs'

function Page({ meta: {consuming}, posts }) {
  return (
    <Layout siteMetaContent={consuming}>
      <Head>
        <title>
          { consuming.siteTitle }
        </title>
      </Head>
      <div className="repo-container">
        <List posts={posts} />
      </div>
      <footer>
        <div className="footer">
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Suk-Be Jang
        </div>
      </footer>
    </Layout>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(restURIs.posts)
  const posts = await res.json()

  return {
    props: {
      posts,
      meta
    }
  }
}

export default Page