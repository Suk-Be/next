import Date from '../components/Date'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/localPosts'
import Link from 'next/link'
import { metaData as meta } from '../data/metaData'
import { format } from 'date-fns'

// runs on server side,
// can only be exported from a page (react needs data before it renders)
// static generation of html with data (not equal to server-side rendering)
export async function getStaticProps(){
  const localPosts = getSortedPostsData()
  return {
    props: {
      meta,
      localPosts
    }
  }
}

export default function Home({
  meta: { home },
  localPosts
}) {
  return (
    <Layout home siteMetaContent={home}>
      <Head>
        <title>
          { home.siteTitle }
        </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          Blog
        </h2>
        <p>Pages and routes are dynamically created from md files</p>
        <ul className={utilStyles.list}>
          {
            localPosts.map(({id, date, title}) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))
          }
        </ul>
      </section>
      <hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>
          Experimenting with next.js
        </h1>
        <h2 className={utilStyles.headingLg}>
          Renderings
        </h2>
        <p>
          Best practices tasks like rendering, states, life-cycle, routing
        </p>
        <h3 className={utilStyles.headingMd}>
          Pre-Rendering on the sever
        </h3>
        <h4 className={utilStyles.headingSm}>getStaticProps</h4>
        <p>
          Fetch data at build time.
        </p>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/static-rendering/component`}>
              <a>static-rendered component</a>
            </Link>
          </li>
        </ul>
        <h4 className={utilStyles.headingSm}>getServerSideProps</h4>
        <p>
          Fetch data on each request.
        </p>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/server-side-rendering/component`}>
              <a>component pre-rendered with getServerSideProps</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/server-side-rendering/swr`}>
              <a>component pre-rendered and listened on with a tool called swr to manage permanent updates</a>
            </Link>
          </li>
        </ul>
        <h4 className={utilStyles.headingSm}>getStaticPaths</h4>
        <p>
          Specify dynamic routes to pre-render pages based on data.
        </p>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation`}>
              <a>Interesting concept for automating an infinite amount of pages and page data.</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              FYI: concept not implemented
            </small>
          </li>
        </ul>
        <h3 className={utilStyles.headingMd}>
          Fetching and rendering on the client
        </h3>
        <h4 className={utilStyles.headingSm}>according to next.js this method is slower than pre-rendering on the server</h4>
        <p>No pre-rendering here</p>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/client-side-rendering/component`}>
              <a>consuming rest api with react hook</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/client-side-rendering/class-component`}>
              <a>consuming rest api with component did mount</a>
            </Link>
          </li>
        </ul>
        <h3 className={utilStyles.headingMd}>
          Combining Pre-Rendering and Client-Side-Rendering
        </h3>
        <h4 className={utilStyles.headingSm}>on page load</h4>
        <p>Pre-rendering page data and fetching data on client build time</p>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/server-side-rendering/hybrid-render`}>
              <a>hybrid component pre-rendered and additionally consuming rest api with a hook</a>
            </Link>
          </li>
        </ul>
        <h4 className={utilStyles.headingSm}>on click</h4>
        <p>Pre-rendering page data and fetching data on button click</p>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/hooks/customUseEffect`}>
              <a>basic managing of four states with a boilerplate component</a>
            </Link>
          </li>
        </ul>
      </section>
      <hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>
          Router API
        </h1>
        <h2 className={utilStyles.headingMd}>use href for semantic reasons</h2>
        <p>and next.js Link component for technical reasons</p>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/router`}>
              <a>Dynamic Routes with next.js useRouter</a>
            </Link>
          </li>
        </ul>
      </section>
      <hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>
          API Routes
        </h1>
        <h2 className={utilStyles.headingMd}>providing REST API</h2>
        <p>handling HTTP requests and responses</p>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/api/helper`}>
              <a>basic request method and some request status examples implemented</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/api/posts`}>
              <a>static route post</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/api/posts/comments`}>
              <a>static route posts/comment</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}