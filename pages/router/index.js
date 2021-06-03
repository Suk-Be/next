import { useRouter } from 'next/router'
import Link from 'next/link'
import restURIs from '../../data/restURIs'
import Layout from '../../components/Layout'
import { metaData as meta } from '../../data/metaData'
import Head from 'next/head'
import Router from '../../components/Router'

const Post = ({ meta: {consuming}, posts }) => {
  return (
    <Layout siteMetaContent={consuming}>
      <Head>
        <title>
          { posts.title }
        </title>
      </Head>
      <div className="repo-container">
        <Router posts={posts} />
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

export default Post