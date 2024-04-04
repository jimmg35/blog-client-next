import React from 'react'
import ArticleWall from './ArticleWall'
import ExternalLinks from './ExternalLinks'
import Introduction from './Introduction'
import Jobs from './Jobs'
import PictureWall from './PictureWall'

const HomeContainer = () => {
  return (
    <main className="">
      <div className="sm:px-8 mt-9">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl text-lg">
                <Introduction />
                <ExternalLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PictureWall />
      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="py-6 mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <ArticleWall />
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <Jobs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeContainer
