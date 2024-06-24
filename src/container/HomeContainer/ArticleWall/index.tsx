import { getAllArticlesMeta } from '@/lib/articles'
import React from 'react'
import Article from './Article'

const ArticleWall = async () => {
  const metas = (await getAllArticlesMeta())
    .sort(
      (a, b) =>
        new Date(b.meta.modifiedTime).getTime() -
        new Date(a.meta.modifiedTime).getTime()
    )
    .slice(0, 4)

  return (
    <div className="flex flex-col gap-16">
      {metas.map(({ meta, articleId }, index) => (
        <Article key={index} articleId={articleId} meta={meta} />
      ))}
    </div>
  )
}

export default ArticleWall
