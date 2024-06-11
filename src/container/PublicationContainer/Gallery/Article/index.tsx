import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Article = ({
  title,
  event,
  description,
  link
}: {
  title: string
  event: string
  description: string | React.ReactNode
  link?: string
}) => {
  const t = useTranslations('Publications')
  return (
    <article className="group relative flex flex-col items-start">
      <h3 className="text-base font-semibold tracking-tight ">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-base-300 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <a>
          <p className="relative z-10 text-justify">{title}</p>
        </a>
      </h3>
      <p className="relative z-10 order-first mb-3 flex items-center text-sm pl-3.5">
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-primary"></span>
        </span>
        {event}
      </p>
      <div className="flex items-center justify-center mt-2 gap-4">
        <p className="relative z-10 text-sm ">{description}</p>
        {link && (
          <Link href={link} target="_blank">
            <div className=" cursor-pointer relative z-10 flex items-center gap-2 text-sm font-medium text-primary">
              {t('Link')}
              <ArrowUpRightIcon className="h-3 w-3" />
            </div>
          </Link>
        )}
      </div>
    </article>
  )
}

export default Article
