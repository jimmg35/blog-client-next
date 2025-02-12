import React from 'react'
import Image from 'next/legacy/image'

const photos = [
  { src: '/images/photo_wall/phuquoc.jpg', rotate: true },
  { src: '/images/photo_wall/chingmai.jpg', rotate: false },
  { src: '/images/photo_wall/sea-0.jpg', rotate: true },
  { src: '/images/photo_wall/sea-1.jpg', rotate: true },
  { src: '/images/photo_wall/sea-4.jpg', rotate: false }
]

const PictureWall = () => {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden pt-4 py-8 sm:gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative calcite-box aspect-[9/10] w-44 flex-none overflow-hidden sm:w-72 sm:rounded-2xl ${photo.rotate ? 'rotate-3' : '-rotate-3'}`}
          >
            <p className="absolute z-10 top-0 left-1/2 -translate-x-1/2"></p>
            <div className="z-0">
              <Image
                src={photo.src}
                alt="sea"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PictureWall
