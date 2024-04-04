import React from 'react'
import Article from './Article'

const ArticleWall = () => {
  return (
    <div className="flex flex-col gap-16">
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  )
}

export default ArticleWall
