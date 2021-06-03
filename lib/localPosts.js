import fs from 'fs'
import html from 'remark-html'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'


// .join - Returns a string
// .cwd  - Returns current working directory of the node.js process
const postsDirectory = path.join(process.cwd(), 'data/posts')

export function getSortedPostsData() {
  // reads the contents of the directory
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // takes a string and returns an object
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })
  // more current items are placed first
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds(){
  const fileNames = fs.readdirSync(postsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  /*
  Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above.
  Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name).
  Otherwise, getStaticPaths will fail.
   */
  return fileNames.map(filename => {
    return {
      params: {
        id: filename.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostsData(id){
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // use remark to convert markdown into html string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
