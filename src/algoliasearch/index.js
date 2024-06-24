const dotenv = require('dotenv')
const algoliasearch = require('algoliasearch/lite')
const path = require('path')
const { readdirSync, readFileSync } = require('fs')
const matter = require('gray-matter')

const loadArticleMeta = async (articleId) => {
  const fileContents = readFileSync(
    path.join(process.cwd(), `src/articles/${articleId}/index.mdx`),
    'utf8'
  )
  const { data: meta, content } = matter(fileContents)
  return { meta, content }
}

const getAllArticles = async () => {
  const articles = await readdirSync(path.join(process.cwd(), 'src/articles'))
  const searchObjects = []
  for (const article of articles) {
    const { meta, content } = await loadArticleMeta(article)
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
