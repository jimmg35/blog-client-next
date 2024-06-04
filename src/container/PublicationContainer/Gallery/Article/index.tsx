import React from 'react'

const Article = ({
  title,
  event,
  description
}: {
  title: string
  event: string
  description: string | React.ReactNode
}) => {
  return (
    <article className="group relative flex flex-col items-start">
      <h3 className="text-base font-semibold tracking-tight ">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-base-300 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <a>
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
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
      <p className="relative z-10 mt-2 text-sm ">{description}</p>
    </article>
  )
}

export default Article
