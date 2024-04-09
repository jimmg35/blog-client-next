import convertUTCtoLocalDate from '@/lib/convertUTCtoLocalDate'
import React from 'react'

const Article = ({
  title,
  description,
  date
}: {
  title: string
  description: string
  date: string
}) => {
  const dateAtUserTimeZone = convertUTCtoLocalDate(date)
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline pl-4">
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight">
          <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-base-300 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="/articles/forecast-cloudy">
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </a>
        </h2>
        <time
          className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm pl-3.5"
          dateTime={dateAtUserTimeZone}
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-primary"></span>
          </span>
          {dateAtUserTimeZone}
        </time>
        <p className="relative z-10 mt-2 text-sm">{description}</p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary"
        >
          Read article
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <time
        className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-500"
        dateTime={dateAtUserTimeZone}
      >
        {dateAtUserTimeZone}
      </time>
    </article>
  )
}

export default Article
