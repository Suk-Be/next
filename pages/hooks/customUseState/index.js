import Layout from '../../../components/Layout'
import Head from 'next/head'
import CounterDemo from './counter'
import utilStyles from '../../../styles/utils.module.css'
import { metaData as meta } from '../../../data/metaData'

export async function getStaticProps(){
  return {
    props: {
      meta
    }
  }
}

const CustomHook = ({
  meta: { home }
}) => {
  return (
    <Layout home siteMetaContent={home}>
      <Head>
        <title>
          { home.siteTitle }
        </title>
      </Head>
      <h1 className={utilStyles.headingXl}>
        Custom hook named useCounter is used
      </h1>
      <h2 className={utilStyles.headingMd}>
        Start with 0, finish with 9, step with 3
      </h2>
      <CounterDemo start={0} finish={9} step={3} />
      <h2 className={utilStyles.headingMd}>
        Start with 100, finish with 130, step with 5
      </h2>
      <CounterDemo start={100} finish={130} step={5} />
      <hr />
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

export default CustomHook