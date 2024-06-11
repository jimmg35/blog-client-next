import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

function SearchBox({ refine }: { refine: (value: string) => void }) {
  return (
    <div className="relative calcite-box">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm">
          <MagnifyingGlassIcon className="w-5 h-5" />
        </span>
      </div>
      <input
        id="algolia_search"
        type="search"
        className="block w-full rounded-md border border-error calcite-focus py-1.5 pl-10 pr-20  sm:text-sm sm:leading-6"
        placeholder="Search for articles!"
        onChange={(e) => refine(e.currentTarget.value)}
      />
    </div>
  )
}

export default connectSearchBox(SearchBox)
