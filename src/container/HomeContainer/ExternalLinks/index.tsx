<<<<<<< HEAD
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
=======
import { ArchiveBoxArrowDownIcon } from '@heroicons/react/24/solid'
>>>>>>> 5a45d81158aed34d2aa2a21516425304c9be05b0
import React from 'react'
import Link from 'next/link'

const externalLinks = [
  {
    icon: (
      <svg
        id="GitHub_32"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" stroke="none" fill="#000000" opacity="0" />

        <g transform="matrix(1.4 0 0 1.4 16 16)">
          <path
            transform=" translate(-12.02, -11.73)"
            d="M 10.9 2.1 C 6.300000000000001 2.6 2.5999999999999996 6.300000000000001 2.0999999999999996 10.799999999999999 C 1.5999999999999996 15.5 4.3 19.7 8.399999999999999 21.299999999999997 C 8.7 21.4 9 21.2 9 20.8 L 9 19.2 C 9 19.2 8.6 19.3 8.1 19.3 C 6.699999999999999 19.3 6.1 18.1 6 17.400000000000002 C 5.9 17.000000000000004 5.7 16.700000000000003 5.4 16.400000000000002 C 5.1 16.3 5 16.3 5 16.2 C 5 16 5.3 16 5.4 16 C 6 16 6.5 16.7 6.7 17 C 7.2 17.8 7.800000000000001 18 8.1 18 C 8.5 18 8.799999999999999 17.9 9 17.8 C 9.1 17.1 9.4 16.400000000000002 10 16 C 7.7 15.5 6 14.2 6 12 C 6 10.9 6.5 9.8 7.2 9 C 7.1 8.8 7 8.3 7 7.6 C 7 7.199999999999999 7 6.699999999999999 7.2 6.3 C 7.2 6.1 7.4 6 7.5 6 C 7.5 6 7.6 6 7.6 6 C 8.1 6.1 9.1 6.4 10 7.3 C 10.6 7.1 11.3 7 12 7 C 12.7 7 13.4 7.1 14 7.3 C 14.9 6.3999999999999995 16 6.1 16.5 6 C 16.5 6 16.6 6 16.6 6 C 16.8 6 16.900000000000002 6.1 17 6.3 C 17 6.7 17 7.2 17 7.6 C 17 8.4 16.9 8.799999999999999 16.8 9 C 17.5 9.8 18 10.8 18 12 C 18 14.2 16.3 15.5 14 16 C 14.6 16.5 15 17.4 15 18.3 L 15 20.900000000000002 C 15 21.200000000000003 15.3 21.500000000000004 15.7 21.400000000000002 C 19.4 19.900000000000002 22 16.300000000000004 22 12.100000000000001 C 22 6.1 16.9 1.4 10.9 2.1 z"
          />
        </g>
      </svg>
    ),
    href: 'https://github.com/jimmg35'
  },
  {
    icon: (
      <svg
        id="Instagram_32"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" stroke="none" fill="#000000" opacity="0" />

        <g transform="matrix(1.08 0 0 1.08 16 16)">
          <path
            transform=" translate(-13, -13)"
            d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"
          />
        </g>
      </svg>
    ),
    href: 'https://www.instagram.com/codetilldie/'
  },
  {
    icon: (
      <svg
        id="LinkedIn_32"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" stroke="none" fill="#000000" opacity="0" />

        <g transform="matrix(1.27 0 0 1.27 16 16)">
          <path
            transform=" translate(-15, -15)"
            d="M 24 4 L 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 z M 10.954 22 L 8.004000000000001 22 L 8.004000000000001 12.508 L 10.954 12.508 L 10.954 22 z M 9.449 11.151 C 8.498 11.151 7.729 10.379999999999999 7.729 9.431 C 7.729 8.482 8.499 7.711999999999999 9.449 7.711999999999999 C 10.397 7.711999999999999 11.168 8.482999999999999 11.168 9.431 C 11.168 10.38 10.397 11.151 9.449 11.151 z M 22.004 22 L 19.056 22 L 19.056 17.384 C 19.056 16.283 19.036 14.867 17.523 14.867 C 15.988 14.867 15.751999999999999 16.066000000000003 15.751999999999999 17.304000000000002 L 15.751999999999999 22 L 12.803999999999998 22 L 12.803999999999998 12.508 L 15.633999999999999 12.508 L 15.633999999999999 13.805 L 15.673999999999998 13.805 C 16.067999999999998 13.059 17.029999999999998 12.272 18.464999999999996 12.272 C 21.451999999999998 12.272 22.003999999999998 14.238 22.003999999999998 16.794 L 22.003999999999998 22 z"
          />
        </g>
      </svg>
    ),
    href: 'https://www.linkedin.com/in/jimmg35/'
  },
  {
    icon: (
      <svg
        id="Facebook_32"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" stroke="none" fill="#000000" opacity="0" />

        <g transform="matrix(1.08 0 0 1.08 16 16)">
          <path
            transform=" translate(-13, -13)"
            d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 20.464844 14.003906 L 18.03125 14.003906 L 18.03125 23.007813 L 13.96875 23.007813 L 13.96875 14.003906 L 12.390625 14.003906 L 12.390625 10.96875 L 13.96875 10.96875 L 13.96875 9.035156 C 13.96875 6.503906 15.019531 5 18.007813 5 L 21.03125 5 L 21.03125 8.023438 L 19.273438 8.023438 C 18.113281 8.023438 18.035156 8.453125 18.035156 9.265625 L 18.03125 10.96875 L 20.796875 10.96875 Z"
          />
        </g>
      </svg>
    ),
    href: 'https://www.facebook.com/profile.php?id=100006963767811'
  }
]

const ExternalLinks = () => {
  return (
    <div className="mt-6 flex gap-6">
      {externalLinks.map((link, index) => (
        <Link
          key={index}
          className="group -m-1 p-1 fill-neutral-500 hover:fill-primary"
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          {link.icon}
        </Link>
      ))}
      <a
        href="/docs/ChangCV.pdf"
        download
        className="text-sm px-5 py-1 rounded-lg flex items-center gap-2 bg-neutral-500 cursor-pointer fill-white text-white hover:bg-primary"
      >
        <ArrowDownTrayIcon className="h-5 w-5  " />
        C. V.
      </a>
    </div>
  )
}

export default ExternalLinks
