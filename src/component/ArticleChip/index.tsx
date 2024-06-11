import { ArticleCategory } from '@/types/articles'
import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

const ArticleChip = ({ category }: { category: ArticleCategory }) => {
  const t = useTranslations('Articles')

  const locale = useLocale()

  const CategoryName: { [key in ArticleCategory]: string } = {
    general: t('CategoryGeneral'),
    gis: t('CategoryGIS'),
    review: t('CategoryReview'),
    tech: t('CategoryTech')
  }

  const CategoryColor: { [key in ArticleCategory]: string } = {
    general:
      'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 bg-gray-50 text-gray-600 ring-gray-500/10 bg-opacity-90 calcite-hover',
    gis: 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium ring-1 text-green-700 ring-green-600/20 bg-opacity-90 calcite-hover',
    review:
      'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 bg-opacity-90 calcite-hover',
    tech: 'inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 bg-opacity-90 calcite-hover'
  }

  return (
    <Link
      href={`/${locale}/articles?category=${category}`}
      className={` ${CategoryColor[category]} select-none cursor-pointer`}
    >
      {CategoryName[category]}
    </Link>
  )
}

export default ArticleChip
