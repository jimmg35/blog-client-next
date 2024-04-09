import React from 'react'

const Gallery = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="space-y-20">{children}</div>
    </div>
  )
}

export default Gallery
