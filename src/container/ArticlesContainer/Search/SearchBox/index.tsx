import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

function SearchBox({ refine }: { refine: (value: string) => void }) {
  return (
    <div className="relative">
      <input
        id="algolia_search"
        type="search"
        className="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6"
        placeholder="Search for articles!"
        onChange={(e) => refine(e.currentTarget.value)}
      />
      <MagnifyingGlassIcon className="w-6 h-6 absolute right-4 top-4" />
    </div>
  )
}

export default connectSearchBox(SearchBox)
