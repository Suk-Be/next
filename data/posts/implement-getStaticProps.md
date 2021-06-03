---
title: 'Dynamic Routes: Implement getStaticProps'
date: '2020-01-07'
---

### Implement getStaticProps

We need to fetch necessary data to render the post with the given **id**.

To do so, open **lib/localPosts.js** again and add the following **getPostData function** at the bottom. 
**It will return the post data based on id:**

```
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}
```

Then, open pages/posts/**[id].js** and replace this line:

```
import { getAllPostIds } from '../../lib/localPosts'
```

with the following code:

```
import { getAllPostIds, getPostData } from '../../lib/localPosts'

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
```
**The post page is now using the getPostData function in getStaticProps to get the post data and return it as props.**

Now, let's update the **Post component** to use **postData**. In pages/posts/**[id].js** replace the exported **Post component** with the following code:

```
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}
```

### Summary

Again, here's the summary of what we have done:
If you want to statically generate a page a path called
/posts/**<id>** where **<id>** can be dynamic, then ...

Create a page at **/pages/posts/[id].js**

The page must contain
1. A React component to render this page
2. **getStaticPaths** which returns an array of possible values for **id**
3. **getStaticProps** which fetches necessary data for the post with **id**


```
// /pages/posts/[id].js

export default function Post({
  postData
}) {
  return (
    <Layout>
      <Head>
        <title>
          { postData.title }
        </title>
      </Head>
      {postData.title}
      <br/>
      {postData.id}
      <br/>
      {postData.date}
    </Layout>
  )
}

// dynamic routing happens here
export async function getStaticPaths(){
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}
// data fetching for the post on route
export async function getStaticProps({ params }){
  const postData = getPostsData(params.id)
  return {
    props: {
      meta,
      postData
    }
  }
}
```

**Quick review:**
How does **params.id** from **getStaticProps({params})** know the key is named **id**?

- The front matter of the Markdown file
- The value from the file name (**correct answer**)