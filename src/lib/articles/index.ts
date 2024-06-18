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
  category: ArticleCategory | undefined = undefined
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
  // console.log(metas)
  return metas
}
