import ArticleChip from '@/component/ArticleChip'
import { IArticleMeta } from '@/types/articles'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'

const Article = ({
  articleId,
  meta: { title, description, category, modifiedTime }
}: {
  articleId: string
  meta: IArticleMeta
}) => {
  const locale = useLocale()
  return (
    <article className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight ">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-base-300 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link href={`/${locale}/articles/${articleId}`}>
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{title}</span>
        </Link>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center text-sm  pl-3.5"
        dateTime={modifiedTime}
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-primary"></span>
        </span>
        {modifiedTime}
      </time>
      <p className="relative z-10 mt-2 text-sm text-neutral-400">
        {description}
      </p>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex gap-2 items-center text-sm font-medium text-primary"
      >
        {category.map((cat, index) => (
          <ArticleChip key={index} category={cat} />
        ))}
        Read article
        <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
      </div>
    </article>
  )
}

export default Article
