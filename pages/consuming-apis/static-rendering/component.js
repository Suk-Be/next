import Head from 'next/head'
import Layout from '../../../components/Layout'
import List from '../../../components/List'
import { metaData as meta } from '../../../data/metaData'
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(restURIs.posts)
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      meta,
      posts,
    },
  }
}

export default Page