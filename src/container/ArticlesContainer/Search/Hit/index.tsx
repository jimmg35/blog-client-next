import React from 'react'

function Hit({
  hit
}: {
  hit: {
    objectID: string
    type: string
    title: string
    description: string
    tagsCollection: { tags: string[] } // we can nest objects in Algolia!
    date: string
    content: string
  }
}) {
  return (
    <article>
      <h1>
        {hit.title}
        {/* <Highlight attribute="name" hit={hit} /> */}
      </h1>
      {/* <Snippet hit={hit} attribute="description" /> */}
    </article>
  )
}

export default Hit
