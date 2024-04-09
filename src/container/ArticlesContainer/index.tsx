import { getArticleList } from '@/lib/articles'
import React from 'react'
import Gallery from './Gallery'
import Article from './Gallery/Article'
import Header from './Header'

const ArticlesContainer = async () => {
  const articles = await getArticleList()
  return (
    <main className="">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <Header />

              <Gallery>
                {articles.map((article, index) => (
                  <Article
                    key={index}
                    title={article.meta.title}
                    description={article.meta.description}
                    categories={article.meta.category}
                    date={article.markdown.modifiedTime}
                  />
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
