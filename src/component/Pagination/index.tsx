import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

const Pagination = ({
  page,
  totalPages
}: {
  page: number
  totalPages: number
}) => {
  return (
    <div className="flex items-center justify-between mt-10  bg-base-200 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md bg-base-100 px-4 py-2 text-sm font-medium calcite-box"
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md bg-base-100 px-4 py-2 text-sm font-medium calcite-box"
        >
          Next
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of{' '}
            <span className="font-bold ">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm calcite-box"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2   hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* {totalPages >= 7 ? (
              <>
                <a
                  href="#"
                  aria-current="page"
                  className={classNames({
                    'relative hidden items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 md:inline-flex':
                      true,
                    'bg-primary text-white': 1 === page
                  })}
                >
                  1
                </a>
                <a
                  href="#"
                  className={classNames({
                    'relative hidden items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 md:inline-flex':
                      true,
                    'bg-primary text-white': 2 === page
                  })}
                >
                  2
                </a>
                <a
                  href="#"
                  className={classNames({
                    'relative hidden items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 md:inline-flex':
                      true,
                    'bg-primary text-white': 3 === page
                  })}
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className={classNames({
                    'relative hidden items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 md:inline-flex':
                      true,
                    'bg-primary text-white': totalPages - 2 === page
                  })}
                >
                  {totalPages - 2}
                </a>
                <a
                  href="#"
                  className={classNames({
                    'relative hidden items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 md:inline-flex':
                      true,
                    'bg-primary text-white': totalPages - 1 === page
                  })}
                >
                  {totalPages - 1}
                </a>
                <a
                  href="#"
                  className={classNames({
                    'relative hidden items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 md:inline-flex':
                      true,
                    'bg-primary text-white': totalPages === page
                  })}
                >
                  {totalPages}
                </a>
              </>
            ) : ( */}
            {Array.from({ length: totalPages }, (_, index) => index).map(
              (value, index) => {
                return (
                  <Link
                    key={index}
                    href={`/en/articles?page=${index + 1}`}
                    className={classNames({
                      'relative hidden items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 md:inline-flex':
                        true,
                      'bg-primary text-white': index + 1 === Number(page)
                    })}
                  >
                    {index + 1}
                  </Link>
                )
              }
            )}
            {/* )} */}

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2  hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
