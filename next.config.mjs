<<<<<<< HEAD
import rehypePresetMinify from 'rehype-preset-minify'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import nextMDX from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'
import remarkCodeTitles from './src/lib/remark-code-title.mjs'
=======
import createNextIntlPlugin from 'next-intl/plugin'
>>>>>>> 5a45d81158aed34d2aa2a21516425304c9be05b0

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkCodeTitles],
    rehypePlugins: [rehypePrismPlus, rehypePresetMinify],
    providerImportSource: '@mdx-js/react'
  }
})

export default withMDX(withNextIntl(nextConfig))
