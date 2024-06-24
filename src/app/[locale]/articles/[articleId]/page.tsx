import matter from 'gray-matter'
import remarkHTML from 'remark-html'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'
import fs from 'fs'
import moment from 'moment'
import * as path from 'path'
import { remark } from 'remark'
import { useLocale } from 'next-intl'
import Link from 'next/link'

const PreviousPageButton = () => {
  const locale = useLocale()
  // const headersList = headers()
  // const header_url = headersList.get('x-url') || '/articles'
  return (
    <Link
      href={`/${locale}/articles`}
      className="calcite-box group border border-error mb-8 flex h-10 w-10 items-center bg-base-100 justify-center rounded-full transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 "
    >
      <ArrowLeftIcon className="h-4 w-4 " />
    </Link>
  )
}

const ArticlePage = async ({
  params: { articleId }
}: {
  params: { locale: string; articleId: string }
}) => {
  const markdownToHTML = async (markdownString: string) => {
    const result = await remark().use(remarkHTML).process(markdownString)
    return result.toString()
  }

  const fileContents = fs.readFileSync(
    path.join(process.cwd(), `src/articles/${articleId}/index.mdx`),
    'utf8'
  )

  const { data: meta, content } = matter(fileContents)
  const mdHtmlContent = content ? await markdownToHTML(content) : undefined
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
                    <time
                      dateTime="2020-08-25"
                      className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-primary"></span>
                      <span className="ml-3">
                        {moment(meta.modifiedTime, 'YYYY-MM-DD').format(
                          'MMMM D, YYYY'
                        )}
                      </span>
                    </time>
                    <header className="flex flex-col">
                      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                        {meta.title}
                      </h1>
                    </header>
                    <div>
                      {mdHtmlContent && (
                        <div
                          className="article mt-8 pt-6 prose prose-lg text-base max-w-none  "
                          dangerouslySetInnerHTML={{ __html: mdHtmlContent }}
                        />
                      )}
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
