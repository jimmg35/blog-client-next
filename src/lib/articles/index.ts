import { perPage } from '@/container/ArticlesContainer'
import { ArticleCategory, IArticleMeta } from '@/types/articles'
import matter from 'gray-matter'
import fs from 'fs'
import * as path from 'path'

export async function loadArticleMeta(articleId: string) {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), `src/articles/${articleId}/index.mdx`),
    'utf8'
  )
  const { data: meta } = matter(fileContents)
  return meta
}

export async function getAllArticlesMeta(
  category: ArticleCategory | undefined = undefined,
  page: number | undefined = undefined
): Promise<
  {
    meta: IArticleMeta
    articleId: string
  }[]
> {
  const articleIds = await fs.readdirSync(
    path.join(process.cwd(), 'src/articles')
  )
  const metas = []
  for (const articleId of articleIds) {
    const meta = (await loadArticleMeta(articleId)) as IArticleMeta
    if (category) {
      const isInCategory = meta.category.includes(category)
      if (isInCategory) metas.push({ meta: meta, articleId })
    } else {
      metas.push({ meta: meta, articleId })
    }
  }

  const sorted = metas.sort(
    (a, b) =>
      new Date(b.meta.modifiedTime).getTime() -
      new Date(a.meta.modifiedTime).getTime()
  )

  if (!page) return sorted

  const start = (page - 1) * perPage
  const end = start + perPage
  return sorted.slice(start, end)
}

export async function getArticleCount(
  category: ArticleCategory | undefined = undefined
) {
  const articleIds = await fs.readdirSync(
    path.join(process.cwd(), 'src/articles')
  )
  const metas = []
  for (const articleId of articleIds) {
    const meta = (await loadArticleMeta(articleId)) as IArticleMeta
    if (category) {
      const isInCategory = meta.category.includes(category)
      if (isInCategory) metas.push({ meta: meta, articleId })
    } else {
      metas.push({ meta: meta, articleId })
    }
  }
  return metas.length
}
