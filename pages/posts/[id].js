import Date from '../../components/Date'
import { getAllPostIds, getPostsData } from '../../lib/localPosts'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { metaData as meta } from '../../data/metaData'
import utilStyles from '../../styles/utils.module.css'

export default function Post({
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
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
    </Layout>
  )
}

export async function getStaticPaths(){
  const paths = getAllPostIds()

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