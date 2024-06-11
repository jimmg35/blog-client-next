'use client'

import Input from '@/component/Input'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Search = () => {
  return (
    <div className="max-w-2xl mt-8 sm:mt-10">
      <Input
        icon={<MagnifyingGlassIcon className="w-5 h-5" />}
        placeholder="search anything..."
        value=""
        onChange={() => {}}
      />
    </div>
  )
}

export default Search
