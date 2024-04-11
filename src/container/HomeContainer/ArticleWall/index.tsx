import { IArticleMeta } from '@/types/articles'
import React from 'react'
import { readFileSync, readdirSync } from 'fs'
import * as path from 'path'
import Article from './Article'

export async function readMdxFile(mdxPath: string) {
  try {
    const fullPath = path.resolve(__dirname, mdxPath)
    const content = await readFileSync(fullPath, 'utf8')
    return content
  } catch (err) {
    console.error(`Error reading MDX file: ${err}`)
  }
}

export async function loadArticleMeta(articleFilename: string) {
  const meta = await readMdxFile(
    path.join(process.cwd(), `src/articles/${articleFilename}/meta.json`)
  )
  return { meta, articleId: articleFilename }
}

export async function getAllArticlesMeta() {
  const articles = await readdirSync(path.join(process.cwd(), 'src/articles'))
  const metas = []
  for (const article of articles) {
    const { meta, articleId } = await loadArticleMeta(article)
    if (meta) metas.push({ meta: JSON.parse(meta) as IArticleMeta, articleId })
  }
  return metas
}

const ArticleWall = async () => {
  const metas = (await getAllArticlesMeta()).slice(0, 4)

  return (
    <div className="flex flex-col gap-16">
      {metas.map(({ meta, articleId }, index) => (
        <Article key={index} articleId={articleId} meta={meta} />
      ))}
      {/* <Article />
      <Article />
      <Article />
      <Article /> */}
    </div>
  )
}

export default ArticleWall
