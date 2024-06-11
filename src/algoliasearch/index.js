const dotenv = require('dotenv')
const algoliasearch = require('algoliasearch/lite')
// import { readFileSync, readdirSync } from 'fs'
const { readdirSync, readFileSync } = require('fs')
const path = require('path')

const readMdxFile = async (mdxPath) => {
  try {
    const fullPath = path.resolve(__dirname, mdxPath)
    const content = await readFileSync(fullPath, 'utf8')
    return content
  } catch (err) {
    console.error(`Error reading MDX file: ${err}`)
  }
}

const loadArticleMeta = async (articleId) => {
  const meta = await readMdxFile(
    path.join(process.cwd(), `src/articles/${articleId}/meta.json`)
  )
  return meta
}

const loadArticleContent = async (articleId) => {
  const content = await readMdxFile(
    path.join(process.cwd(), `src/articles/${articleId}/index.mdx`)
  )
  return content
}

const getAllArticles = async () => {
  const articles = await readdirSync(path.join(process.cwd(), 'src/articles'))
  const searchObjects = []
  for (const article of articles) {
    const meta = JSON.parse(await loadArticleMeta(article))
    const content = await loadArticleContent(article)
    const searchObject = {
      objectID: article,
      type: 'article',
      title: meta.title,
      description: meta.description,
      tagsCollection: { tags: meta.category }, // we can nest objects in Algolia!
      date: meta.modifiedTime,
      content: content
    }
    searchObjects.push(searchObject)
  }
  return searchObjects
}

;(async function () {
  dotenv.config()

  try {
    const articles = await getAllArticles()

    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    )

    const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME)

    const algoliaResponse = await index.saveObjects(articles)

    console.log(
      `Successfully added ${algoliaResponse.objectIDs.length} records to Algolia search! Object IDs:\n${algoliaResponse.objectIDs.join(
        '\n'
      )}`
    )
  } catch (err) {
    console.error(err)
  }
})()
