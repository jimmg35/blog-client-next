'use client'

import ArticleChip from '@/component/ArticleChip'
import Input from '@/component/Input'
import algoliasearch from 'algoliasearch/lite'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Article from '../Gallery/Article'

console.log(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID)
console.log(process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY)
console.log(process.env.ALGOLIA_SEARCH_ADMIN_KEY)

const searchClient = algoliasearch(
  'latency',
  '4cb45a06804396bc2e1ca81137fdfca1'
)

const Search = () => {
  return (
    <div className="max-w-2xl mt-8 sm:mt-10">
      <Input
        icon={<MagnifyingGlassIcon className="w-5 h-5" />}
        placeholder="search anything..."
        value=""
        onChange={(value) => {}}
      />
    </div>
  )
}

export default Search
