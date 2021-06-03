import React from 'react'
import utilStyles from '../styles/utils.module.css'

const ListImages = ({images}) => {
  if (!images || images.length === 0)return <p>no images, sorry </p>

  return (
    <ul>
      <h2 className={utilStyles.headingLg}>Available Images</h2>
      {
        images.map( image => {
          return (
            <li key={image.id} className="list">
              <h3 className='repo-text'>{image.title}</h3>
              <img src={image.url} alt={image.title}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListImages