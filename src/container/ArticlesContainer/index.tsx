import Pagination from '@/component/Pagination'
import { getAllArticlesMeta } from '@/lib/articles'
import { ArticleCategory, IArticleMeta } from '@/types/articles'
import React from 'react'
import { readFileSync, readdirSync } from 'fs'
import * as path from 'path'
import Category from './Category'
import Gallery from './Gallery'
import Article from './Gallery/Article'
import Header from './Header'
import Search from './Search'

const ArticlesContainer = async ({
  category,
  page
}: {
  category: ArticleCategory | undefined
  page: number
}) => {
  const metas = (await getAllArticlesMeta(category, page)).sort(
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
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ArticlesContainer
