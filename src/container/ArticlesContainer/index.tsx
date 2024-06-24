import Pagination from '@/component/Pagination'
import { getAllArticlesMeta, getArticleCount } from '@/lib/articles'
import { ArticleCategory } from '@/types/articles'
import React from 'react'
import Category from './Category'
import Gallery from './Gallery'
import Article from './Gallery/Article'
import Header from './Header'
import Search from './Search'

export const perPage = 4

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

  const count = await getArticleCount()

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
              <Pagination page={page} totalPages={Math.ceil(count / perPage)} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ArticlesContainer
