import { IArticleMeta } from '@/types/articles'
// import glob from 'fast-glob'
// import { readFile, readdir } from 'fs/promises'
// import { readFileSync, readdirSync } from 'fs'
import * as path from 'path'

async function readMdxFile(mdxPath: string) {
  try {
    const fullPath = path.resolve(__dirname, mdxPath)
    // const content = await readFileSync(fullPath, 'utf8')
    // return content
    return ''
  } catch (err) {
    console.error(`Error reading MDX file: ${err}`)
  }
}

export async function loadArticleContent(articleId: string) {
  const content = await readMdxFile(
    path.join(process.cwd(), `src/articles/${articleId}/index.mdx`)
  )
  return content
}

export async function loadArticleMeta(articleFilename: string) {
  const meta = await readMdxFile(
    path.join(process.cwd(), `src/articles/${articleFilename}/meta.json`)
  )
  return { meta, articleId: articleFilename }
}

export async function getAllArticlesMeta() {
  // const articles = await readdirSync(path.join(process.cwd(), 'src/articles'))
  // const metas = []
  // for (let article of articles) {
  //   const { meta, articleId } = await loadArticleMeta(article)
  //   if (meta) metas.push({ meta: JSON.parse(meta) as IArticleMeta, articleId })
  // }
  // return metas
  // let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
  //   cwd: path.join(process.cwd(), 'src/articles')
  // })
  // console.log(articleFilenames)
  return []
}
