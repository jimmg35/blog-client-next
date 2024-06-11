'use client'

import algoliasearch from 'algoliasearch/lite'
import React from 'react'
import { Hits, InstantSearch } from 'react-instantsearch-dom'
import Hit from './Hit'
import SearchBox from './SearchBox'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
    ? process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
    : '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
    ? process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
    : ''
)

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="my_blog">
      <div className="max-w-2xl mt-8 sm:mt-10">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  )
}

export default Search
