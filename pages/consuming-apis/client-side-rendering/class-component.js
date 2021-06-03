import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import List from '../../../components/List'
import restURL from '../../../data/restURIs'
import { metaData as meta } from '../../../data/metaData'
import WithListLoading from '../../../components/WithListLoading'

export async function getStaticProps(){
  return {
    props: {
      meta
    }
  }
}

const ListLoading = WithListLoading(List)

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      posts: null
    }
  }
  componentDidMount() {
    const apiUrl = restURL.posts
    fetch(apiUrl)
      .then((response) => response.json())
      .then((posts) => this.setState({loading: false, posts: posts}))
  }
  render() {
    return (
      <Layout siteMetaContent={this.props.meta.consuming}>
        <Head>
          <title>
            { this.props.meta.consuming.siteTitle }
          </title>
        </Head>
        <div className="repo-container">
          <ListLoading isLoading={this.state.loading} posts={this.state.posts} />
        </div>
      </Layout>
    )
  }
}
export default Page