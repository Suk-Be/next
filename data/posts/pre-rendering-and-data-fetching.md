---
title: 'Pre-rendering and Data Fetching: How to combine Pre-rendering and Data Fetching'
date: '2020-01-04'
---

### Static Generation can be done with and without data.

So far, all the pages we’ve created do not require fetching external data. Those pages will automatically be statically generated when the app is built for production.

Static Generation **without Data**
- for pages that can be generated without fetching any external data at build time
- builds the app for production
- the html is generated - no need to fetch external data 

However, for some pages, you might not be able to render the HTML without first fetching some external data. Maybe you need to access the file system, fetch external API, or query your database at build time. Next.js supports this case — Static Generation with data — out of the box.

Static Generation **with Data**
- for pages that can only be generated after fetching data at build time
- builds the app for production
    - Fetches external data
    - the htm can only be generated after fetching data

Static Generation with Data using **getStaticProps**

How does it work? Well, in Next.js, when you export a page component, you can also export an async function called getStaticProps. If you do this, then:

- getStaticProps runs at build time in production, and…
- Inside the function, you can fetch external data and send it as props to the page.

```
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

Essentially, getStaticProps allows you to tell Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”

Note: In development mode, getStaticProps runs on each request instead.