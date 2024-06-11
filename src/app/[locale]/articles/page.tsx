import ArticlesContainer from '@/container/ArticlesContainer'
import { ArticleCategory } from '@/types/articles'
import React from 'react'

export default function Articles({
  searchParams: { category }
}: {
  searchParams: { category?: ArticleCategory }
}) {
  return <ArticlesContainer category={category} />
}
