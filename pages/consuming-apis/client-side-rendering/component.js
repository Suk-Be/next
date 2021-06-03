import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import { metaData as meta } from '../../../data/metaData'
import Layout from '../../../components/Layout'
import List from '../../../components/List'
import restURIs from '../../../data/restURIs'
import WithListLoading from '../../../components/WithListLoading'

export async function getStaticProps(){
  return {
    props: {
      meta
    }
  }
}

export default function Page({meta: {consuming}}){
  // HOC
  const ListLoading = WithListLoading(List)
  const [appState, setAppState] = useState({
    loading: false,
    posts: null
  })

  useEffect(() => {
    setAppState({loading: true})
    const apiURL = restURIs.posts

    fetch(apiURL)
      .then(res => res.json())
      .then(posts => {
        setAppState({loading: false, posts: posts})
      })
  }, [setAppState])

  return (
    <Layout siteMetaContent={consuming}>
      <Head>
        <title>
          { consuming.siteTitle }
        </title>
      </Head>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} posts={appState.posts} />
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