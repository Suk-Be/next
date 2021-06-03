---
title: 'Dynamic Routes: Page Path Depends on External Data'
date: '2020-01-05'
---

### Page Path Depends on External Data

In the previous lesson, we covered the case where the **page content** depends on external data. 
We used **getStaticProps** to fetch required data to render the index page.

In this lesson, we’ll talk about the case where each **page path** depends on external data. 
Next.js allows you to statically generate pages with paths that depend on external data. 
This enables **dynamic** URLs in Next.js.

- next.js, next build: builds the app for production
    - fetches external data
        ```
        [
            {id: 'foo', ...},
            {id: 'bar', ...}
        ]
        ```
    - generates pages that have the path format: **/posts/[id]**
        - /posts/**foo**
        - /posts/**bar**

### How to Statically Generate Pages with Dynamic Routes

In our case, we want to create dynamic routes for blog posts:

- We want each post to have the path **/posts/<id>**, where **<id>** is the name of the markdown file under the top-level posts directory.
- Since we have **ssg-ssr.md** and **pre-rendering.md**, we’d like the paths to be **/posts/ssg-ssr** and **/posts/pre-rendering**.

### Overview of the Steps
We can do this by taking the following steps. You don’t have to make these changes yet — we’ll do it all on the next page.

First, we’ll create a page called **[id].js** under **pages/posts**. 
Pages that begin with **[ and end with ]** are dynamic routes in Next.js.

In pages **/posts/[id].js**, we’ll write code that will render a post page — just like other pages we’ve created.

```
import Layout from '../../components/layout'

export default function Post() {
  return <Layout>...</Layout>
}
```

**Now, here’s what’s new:** 

We’ll export an async function called **getStaticPaths** from this page. 

In this function, we need to return a list of possible values for id.

```
export async function getStaticPaths() {
  // Return a list of possible value for id
}
```

Finally, we need to implement **getStaticProps** again - this time, 
to fetch necessary data for the blog post with a given **id**. 

**getStaticProps** is given **params**, which contains **id** (because the file name is **[id].js**).

```
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
```

### Here’s a summary of what we just talked about:
How to statically generate pages (rendered on server side) with dynamic routes.

If you want to statically generate a page at a path called /posts/**<id>** where **<id>** can be dynamic, then ...

Create a page at **/pages/posts/[id].js**

The page must contain:
1. A React component to render this page
2. **getStaticPaths** which returns an **array** of possible values for **id**
3. **getStaticProps** which fetches necessary data for the post with **id**

```
import Layout from '../../components/layout'

export default function Post() {
  return <Layout>...</Layout>
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
```