---
title: 'Dynamic Routes: Polishing the Post Page'
date: '2020-01-09'
---

### Adding 'title' to the Post Page

In **pages/posts/[id].js**, let’s add the **title** tag using the post data. 
You'll need to add an import for **next/head** at the top of the file and add the **title** tag by updating the **Post** component:

```
// Add this import
import Head from 'next/head'

export default function Post({ postData }) {
  return (
    <Layout>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>

      {/* Keep the existing code here */}
    </Layout>
  )
}
```

### Formatting the date
To format the date, we’ll use the **date-fns** library.

```
npm install date-fns
```

Next, create a file called components/date.js and add the following Date component:

```
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
```
**Note**: You can view the different format() string options here https://date-fns.org/v2.16.1/docs/format.

Now, open **pages/posts/[id].js**, add an import for the **Date** component at the top of the file, and use it over **{postData.date}**:

```
// Add this import
import Date from '../../components/date'

export default function Post({ postData }) {
  return (
    <Layout>
      {/* Keep the existing code here */}

      {/* Replace {postData.date} with this */}
      <Date dateString={postData.date} />

      {/* Keep the existing code here */}
    </Layout>
  )
}
```
If you access http://localhost:3000/posts/pre-rendering, 
you should now see the date written as “**January 1, 2020**”.

### Adding CSS
Finally, let’s add some CSS using the file **styles/utils.module.css** we added before. 
Open **pages/posts/[id].js**, then add an import for the CSS file, and replace the **Post** component with the following code:
```
// Add this import at the top of the file
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
```
If you access http://localhost:3000/posts/pre-rendering, the page should now look a little better: