import React from 'react'

const Gallery = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="md:border-l border-error">
        <div className="flex max-w-3xl flex-col space-y-16 pb-8">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Gallery
