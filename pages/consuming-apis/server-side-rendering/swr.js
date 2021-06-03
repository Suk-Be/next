import useSWR from 'swr'
import Layout from '../../../components/Layout'
import { metaData as meta } from '../../../data/metaData'
import restURIs from '../../../data/restURIs'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Page(props) {
  const { data, error } = useSWR(restURIs.firstPost, fetcher, { initialData: props.posts })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout siteMetaContent={meta.consuming}>
      <h3>swr - a library for constant data fetches (re-rendering, example use case would be a monitoring app) on initially pre-rendered data</h3>
      <h5>{data.title}!</h5>
      <p>{data.body}</p>
    </Layout>
  )
}

Page.getInitialProps = async (ctx) => {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const posts = await fetcher(restURIs.firstPost)
  return {
    props: {
      posts
    }
  }
}

export default Page