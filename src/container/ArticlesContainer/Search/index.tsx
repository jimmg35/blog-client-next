'use client'

import ArticleChip from '@/component/ArticleChip'
import Input from '@/component/Input'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Article from '../Gallery/Article'

const Search = () => {
  return (
    <div className="max-w-2xl mt-8 sm:mt-10">
      <Input
        icon={<MagnifyingGlassIcon className="w-5 h-5" />}
        placeholder="search anything..."
        value=""
        onChange={(value) => {}}
      />
      <div>
        {/* <ArticleChip category="general" /> */}
        {/* <span className={CategoryColor[category]}>{CategoryName[category]}</span> */}
      </div>
    </div>
  )
}

export default Search
