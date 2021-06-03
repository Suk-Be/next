import Layout from '../../components/Layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { getAllPageIds, getPostsData } from '../../lib/fetchPosts'
import { metaData as meta } from '../../data/metaData'

function RoutedPage({
  meta: { home },
  postData
}) {
  return (
    <Layout siteMetaContent={home}>
      <Head>
        <title>
          { postData.title }
        </title>
      </Head>
      <h1 className={utilStyles.headingXl}>
        {postData.title}
      </h1>
      <h2 className={utilStyles.headingMd}>
        {postData.id}
      </h2>
      <p>
        {postData.body}
      </p>
    </Layout>
  )
}

export async function getStaticPaths(){
  const paths = getAllPageIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }){
  const postData = await getPostsData(params.id)
  return {
    props: {
      meta,
      postData
    }
  }
}

export default RoutedPage