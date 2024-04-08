import React from 'react'
import Introduction from './Introduction'

const AboutContainer = () => {
  return (
    <main className="">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <Introduction />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutContainer
