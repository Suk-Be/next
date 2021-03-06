---
title: 'Dynamic Routes: Polishing the Index Page'
date: '2020-01-10'
---

### Polishing the Index Page

Next, let’s update our index page (**pages/index.js**). 
We need to add links to each post page using the **Link** component.

Open **pages/index.js** and add the following imports at the top of the file for **Link** and **Date**:

```
// Add this import
import Link from 'next/link'
import Date from '../components/date'
```

Then, near the bottom of the **Home** component in the same file, replace the **li** tag with the following:

```
<li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>
```

If you go to http://localhost:3000, the page now has links to each article:

That’s it! Before we wrap up this lesson, let’s talk about some tips for dynamic routes on the next page.