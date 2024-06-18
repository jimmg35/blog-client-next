import ArticlesContainer from '@/container/ArticlesContainer'
import { ArticleCategory } from '@/types/articles'
import React from 'react'

export default function Articles({
  searchParams: { category, page = 1 }
}: {
  searchParams: {
    category?: ArticleCategory
    page?: number
  }
}) {
  return <ArticlesContainer category={category} page={page} />
}
