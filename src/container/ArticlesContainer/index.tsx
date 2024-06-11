import { IArticleMeta } from '@/types/articles'
import React from 'react'
import { readFileSync, readdirSync } from 'fs'
import * as path from 'path'
import Category from './Category'
import Gallery from './Gallery'
import Article from './Gallery/Article'
import Header from './Header'
import Search from './Search'

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

const ArticlesContainer = async () => {
  const metas = (await getAllArticlesMeta()).sort(
    (a, b) =>
      new Date(b.meta.modifiedTime).getTime() -
      new Date(a.meta.modifiedTime).getTime()
  )

  return (
    <main className="">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <Header />
              <Search />
              <Category />
              <Gallery>
                {metas.map(({ meta, articleId }, index) => (
                  <Article key={index} articleId={articleId} meta={meta} />
                ))}
              </Gallery>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ArticlesContainer
