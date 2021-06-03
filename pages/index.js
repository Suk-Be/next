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
        <h2 className={utilStyles.headingLg}>
          Pre-Rendering and Client-Side-Rendering
        </h2>
        <h3 className={utilStyles.headingMd}>Pre-Rendering on Server (getStaticProps)</h3>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/static-rendering/component`}>
              <a>static-rendered component</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <time dateTime='2020-09-01 19:00'>January 9, 2020</time>
            </small>
          </li>
        </ul>
        <h3 className={utilStyles.headingMd}>Pre-Rendering on Server (getStaticProps/getServerSideProps)</h3>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/server-side-rendering/component`}>
              <a>component pre-rendered with getServerSideProps </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <time dateTime='2020-11-01 19:00'>January 11, 2020</time>
            </small>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/server-side-rendering/hybrid-render`}>
              <a>hybrid component pre-rendered and additionally consuming rest api with a hook</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <time dateTime='2020-10-01 19:00'>January 10, 2020</time>
            </small>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/server-side-rendering/swr`}>
              <a>component pre-rendered and listened on with a tool called swr to manage permanent updates</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <time dateTime='2020-10-01 19:00'>January 10, 2020</time>
            </small>
          </li>
        </ul>
        <h3 className={utilStyles.headingMd}>Client side rendered (slower than next.js pre-rendering)</h3>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/client-side-rendering/component`}>
              <a>consuming rest api with react hook</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <time dateTime='2020-13-01 19:00'>January 13, 2020</time>
            </small>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/consuming-apis/client-side-rendering/class-component`}>
              <a>consuming rest api with component did mount</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <time dateTime='2020-12-01 19:00'>January 12, 2020</time>
            </small>
          </li>
        </ul>
      </section>
      <hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          Router API
        </h2>
        <h3 className={utilStyles.headingMd}>href semantics for routing</h3>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`/router/about`}>
              <a>About</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/router/first-link`}>
              <a>First Link</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/router/second-link`}>
              <a>Second Link</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}