import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import restURIs from '../data/restURIs'

export async function getAllPageIds(){
  const pageNames = await fetch(restURIs.posts)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: '1'
  //     }
  //   },
  //   {
  //     params: {
  //       id: '2'
  //     }
  //   }
  // ]

  /*
  Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above.
  Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name).
  Otherwise, getStaticPaths will fail.
   */
  return pageNames.map(pagename => {
    return {
      params: {
        id: pagename.id
      }
    }
  })
}

export async function getPostsData(id, restURL){
  const res = await fetch(restURL)
  const consumeData = await res.json()

  // Combine the data with the id and contentHtml
  return {
    id,
    consumeData
  }
}