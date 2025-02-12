import React from 'react'
import Link from 'next/link'

const Footer = ({
  routes
}: {
  routes: {
    name: string
    href: string
    icon: React.JSX.Element
  }[]
}) => {
  return (
    <footer className="mt-32">
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8 ">
          <div className=" pt-10 pb-16">
            <div className="relative px-4 sm:px-8 lg:px-12 ">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row  border-t border-error pt-16">
                  <div className="flex flex-wrap justify-center gap-6 text-sm font-light">
                    {routes.map((route, index) => (
                      <Link
                        key={index}
                        href={route.href}
                        className="transition hover:text-primary cursor-pointer flex gap-1 justify-center items-center"
                      >
                        {route.icon}
                        {route.name}
                      </Link>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    © 2025 Jim Chang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
