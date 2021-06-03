import React from 'react'
import utilStyles from '../styles/utils.module.css'

const List = ({posts}) => {
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
            </li>
          )
        })
      }
    </ul>
  )
}

export default List