import ArticleChip from '@/component/ArticleChip'
import React from 'react'

const Category = () => {
  return (
    <div className="max-w-2xl mt-4 sm:mt-5 flex gap-4">
      <ArticleChip category="general" />
      <ArticleChip category="gis" />
      <ArticleChip category="review" />
      <ArticleChip category="tech" />
    </div>
  )
}

export default Category
