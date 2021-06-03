import React from 'react'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

const Router = ({posts}) => {
  if (!posts || posts.length === 0)return <p>no posts, sorry </p>

  return (
    <ul>
      <h2 className={utilStyles.headingLg}>Available Posts</h2>
      {
        posts.map( post => {
          return (
            <li key={post.id} className="list">
              <h3 className='repo-text'>{post.title}</h3>
              <p className='repo-description'>{post.body}</p>
              <Link href={`router/${post.id}`}>
                <a>User {post.userId}: schrieb post {post.id}</a>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Router