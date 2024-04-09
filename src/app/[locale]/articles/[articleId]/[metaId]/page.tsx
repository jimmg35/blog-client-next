import { getFileContent } from '@/lib/articles'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useLocale } from 'next-intl'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

const PreviousPageButton = () => {
  const locale = useLocale()
  return (
    <Link
      href={`/${locale}/articles`}
      className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
    >
      <ArrowLeftIcon className="h-4 w-4 " />
    </Link>
  )
}

const ArticlePage = async ({
  params: { articleId, metaId }
}: {
  params: { locale: string; articleId: string; metaId: string }
}) => {
  const { content } = await getFileContent(metaId)
  const markdown = await getFileContent(articleId)
  return (
    <main>
      <div className="sm:px-8 mt-16 lg:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="xl:relative">
                <div className="mx-auto max-w-2xl">
                  <PreviousPageButton />
                  <article>
                    <header className="flex flex-col">
                      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        {JSON.parse(content).title}
                      </h1>
                    </header>
                    <div className="pt-6 prose prose-lg text-xl max-w-none dark:prose-invert mt-8">
                      <MDXRemote source={markdown.content} />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ArticlePage
