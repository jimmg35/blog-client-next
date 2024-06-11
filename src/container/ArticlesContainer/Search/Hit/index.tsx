import ArticleChip from '@/component/ArticleChip'
import ClientArticleChip from '@/component/ClientArticleChip'
import { ArticleCategory } from '@/types/articles'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Link from 'next/link'

function Hit({
  hit: { objectID, title, description, tagsCollection, date }
}: {
  hit: {
    objectID: string
    type: string
    title: string
    description: string
    tagsCollection: { tags: string[] } // we can nest objects in Algolia!
    date: string
    content: string
  }
}) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline pl-4 mt-8">
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight">
          <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-base-300 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <Link href={`/${'en'}/articles/${objectID}`}>
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </Link>
        </h2>
        <time
          className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm pl-3.5"
          dateTime={date}
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-primary"></span>
          </span>
          {date}
        </time>
        <p className="relative z-10 mt-2 text-sm">{description}</p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center flex-wrap gap-2 text-sm font-medium text-primary"
        >
          {tagsCollection.tags.map((cat, index) => (
            <ClientArticleChip key={index} category={cat as ArticleCategory} />
          ))}
          Read More
          <ArrowUpRightIcon className="h-3 w-3" />
        </div>
      </div>
      <time
        className="mt-1 hidden md:block relative z-10 order-first mb-3  items-center text-sm text-zinc-500 dark:text-zinc-500"
        dateTime={date}
      >
        {date}
      </time>
    </article>
  )
}

export default Hit
