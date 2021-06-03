import fs from 'fs'
import path from 'path'

const csrDirectory = path.join(process.cwd(), 'pages/consuming-apis/client-side-rendering')
const ssrDirectory = path.join(process.cwd(), 'pages/consuming-apis/server-side-rendering')
const srDirectory = path.join(process.cwd(), 'pages/consuming-apis/static-rendering')

const getApiId = (path) => {
  // reads the contents of the directory
  const fileNames = fs.readdirSync(path)
  return fileNames.map(filename => {
    return {
      params: {
        id: filename.replace(/\.js$/, '')
      }
    }
  })
}

export async function getConsumeData(id, restURL){
  const res = await fetch(restURL)
  const consumeData = await res.json()

  // combine the id with the data
  return {
    id,
    consumeData
  }
}

export {
  csrDirectory,
  ssrDirectory,
  srDirectory,
  getApiId
}