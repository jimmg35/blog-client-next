import remarkHTML from 'remark-html'
// import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { readFileSync } from 'fs'
import * as path from 'path'
import { remark } from 'remark'

// import { useLocale } from 'next-intl'
// import { headers } from 'next/headers'
// import Link from 'next/link'

// const PreviousPageButton = () => {
//   const locale = useLocale()
//   const headersList = headers()
//   const header_url = headersList.get('x-url') || '/articles'
//   return (
//     <Link
//       href={`/${locale}/articles`}
//       className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full  shadow-md bg-base-300 transition  lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
//     >
//       <ArrowLeftIcon className="h-4 w-4 " />
//     </Link>
//   )
// }

const ArticlePage = async ({
  params: { articleId }
}: {
  params: { locale: string; articleId: string }
}) => {
  const markdownToHTML = async (markdownString: string) => {
    const result = await remark().use(remarkHTML).process(markdownString)
    return result.toString()
  }

  const readMdxFile = async (mdxPath: string) => {
    try {
      const fullPath = path.resolve(__dirname, mdxPath)
      const content = await readFileSync(fullPath, 'utf8')
      return content
    } catch (err) {
      console.error(`Error reading MDX file: ${err}`)
    }
  }

  const loadArticleMeta = async (articleFilename: string) => {
    const meta = await readMdxFile(
      path.join(process.cwd(), `src/articles/${articleFilename}/meta.json`)
    )
    return { meta, articleId: articleFilename }
  }

  const loadArticleContent = async (articleId: string) => {
    const content = await readMdxFile(
      path.join(process.cwd(), `src/articles/${articleId}/index.mdx`)
    )
    return content
  }

  const { meta } = await loadArticleMeta(articleId)
  const content = await loadArticleContent(articleId)
  const mdHtmlContent = content ? await markdownToHTML(content) : undefined
  return (
    <main>
      <div className="sm:px-8 mt-16 lg:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="xl:relative">
                <div className="mx-auto max-w-2xl">
                  {/* <PreviousPageButton /> */}
                  <article>
                    <header className="flex flex-col">
                      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                        {meta && JSON.parse(meta).title}
                      </h1>
                    </header>
                    <div>
                      {mdHtmlContent && (
                        <div
                          className="mt-8 pt-6 prose prose-lg text-xl max-w-none  "
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
