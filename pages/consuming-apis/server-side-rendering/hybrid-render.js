import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import { metaData as meta } from '../../../data/metaData'
import Layout from '../../../components/Layout'
import List from '../../../components/List'
import restURIs from '../../../data/restURIs'
import Todo from '../../../components/Todo'
import WithListLoading from '../../../components/WithListLoading'

function Page({ meta: {consuming}, posts }) {
  // HOC
  const ListLoading = WithListLoading(Todo)
  const [appState, setAppState] = useState({
    loading: true,
    todos: null,
    headline: null
  })

  // data todos is requested on the clientside
  // setAppState function gets applied when component gets updated and mounted
  useEffect(() => {
    setAppState({loading: true})
    const apiURL = restURIs.todos

    fetch(apiURL)
      .then(res => res.json())
      .then(todos => {
        setAppState({
          loading: false,
          todos: todos,
          headline: 'Todos'})
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
        <List posts={posts} />
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} todos={appState.todos} headline={appState.headline} />
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
// Posts data is generated on the server
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