// import { getArticleList } from '@/lib/articles'
import { getAllArticlesMeta } from '@/lib/getAllArticles'
import React from 'react'
import Gallery from './Gallery'
import Article from './Gallery/Article'
import Header from './Header'

const ArticlesContainer = async () => {
  // const articles = await getArticleList()

  const metas = await getAllArticlesMeta()

  return (
    <main className="">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <Header />
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
