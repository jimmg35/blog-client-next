import { ArticleCategory } from '@/types/articles'
import React from 'react'
import { useTranslations } from 'next-intl'

const ArticleChip = ({ category }: { category: ArticleCategory }) => {
  const t = useTranslations('Articles')

  const CategoryName: { [key in ArticleCategory]: string } = {
    general: t('CategoryGeneral'),
    gis: t('CategoryGIS'),
    review: t('CategoryReview')
  }

  const CategoryColor: { [key in ArticleCategory]: string } = {
    general:
      'inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10',
    gis: 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20',
    review:
      'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'
  }

  return (
    <span className={CategoryColor[category]}>{CategoryName[category]}</span>
  )
}

export default ArticleChip
