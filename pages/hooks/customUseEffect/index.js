import Boilerplate from './boilerplate'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import ListImages from '../../../components/ListImages'
import { metaData as meta } from '../../../data/metaData'
import restURIs from '../../../data/restURIs'

// server-side fetched props
export async function getStaticProps(){
  const res = await fetch(restURIs.images)
  const images = await await res.json()
  return {
    props: {
      meta,
      images
    }
  }
}

// Page
const CustomEffect = ({ meta: { home }, images }) => {
  return (
    <Layout siteMetaContent={home}>
      <Head>
        <title>
          { home.siteTitle }
        </title>
      </Head>
      <div className="repo-container">
        {/* boilerplate component for fetching props on clientside */}
        <Boilerplate />
      </div>
      <div className="repo-container">
        <ListImages images={images} />
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

export default CustomEffect