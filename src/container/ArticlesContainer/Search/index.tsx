'use client'

import algoliasearch from 'algoliasearch/lite'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React, { useRef } from 'react'
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
  const dialogRef = useRef<HTMLDialogElement>(null)
  return (
    <InstantSearch searchClient={searchClient} indexName="my_blog">
      <div className="max-w-2xl mt-8 sm:mt-10">
        <div className="relative calcite-box">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </span>
          </div>
          <input
            type="text"
            id="locale_modal"
            className="block w-full rounded-md border border-error calcite-focus py-1.5 pl-10 pr-20  sm:text-sm sm:leading-6"
            onClick={() => {
              dialogRef.current?.showModal()
            }}
            placeholder="Search for articles!"
          />
        </div>
        <dialog className="modal backdrop-blur-sm" ref={dialogRef}>
          <div className="modal-box overflow-hidden p-0 rounded-md max-w-[800px] top-[125px] absolute">
            <SearchBox />
            <div className="p-8 pt-0 pb-10 max-h-[400px] overflow-auto">
              <Hits hitComponent={Hit} />
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button></button>
          </form>
        </dialog>
      </div>
    </InstantSearch>
  )
}

export default Search
