import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { cookies } from 'next/headers'
import LocaleSwitcher from '../LocaleSwitcher'
import ThemeSwitcher from '../ThemeSwitcher'

const NavBar = ({
  routes
}: {
  routes: {
    name: string
    href: string
    icon: React.JSX.Element
  }[]
}) => {
  const theme = cookies().get('theme')?.value === 'dark' ? 'dark' : 'light'

  return (
    <div className="top-0 z-10 h-16 pt-6 bg-transparent">
      <div className="sm:px-8 w-full">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="relative flex gap-4">
                <div className="flex flex-1"></div>
                <div className="flex flex-1 justify-end md:justify-center">
                  <div className="pointer-events-auto md:hidden">
                    <label
                      htmlFor="menu_modal"
                      className="hover:text-primary cursor-pointer group flex items-center gap-2 rounded-full bg-base-100 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur"
                    >
                      Menu
                      <ChevronDownIcon className="w-3 h-3" />
                    </label>

                    <input
                      type="checkbox"
                      id="menu_modal"
                      className="modal-toggle"
                    />
                    <div className="modal" role="dialog">
                      <div className="modal-box absolute top-[25px]">
                        <div className="flex justify-between items-center">
                          <h3 className="text-sm font-light">Navigation</h3>
                          <label
                            className="btn btn-sm btn-circle btn-ghost "
                            htmlFor="menu_modal"
                          >
                            ✕
                          </label>
                        </div>

                        <nav className="mt-6">
                          <ul className="-my-2 divide-y divide-base-200 text-base ">
                            {routes.map((route, index) => (
                              <li key={index}>
                                <a
                                  className="py-2 flex gap-1 juctify-center items-center"
                                  data-headlessui-state="open"
                                  href={route.href}
                                >
                                  {route.icon}
                                  <span>{route.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                      <label
                        className="modal-backdrop"
                        htmlFor="menu_modal"
                      ></label>
                    </div>
                  </div>

                  <nav className="pointer-events-auto hidden md:block">
                    <ul className="flex rounded-full bg-base-100 px-3 text-sm font-medium shadow border border-error">
                      {routes.map((route, index) => (
                        <li key={index}>
                          <a
                            className="relative w-[130px] flex gap-1 justify-center items-center px-3 py-2 transition hover:text-primary"
                            href={route.href}
                          >
                            {route.icon}
                            <p className=" ">{route.name}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="flex gap-3 justify-end md:flex-1">
                  <LocaleSwitcher />
                  <ThemeSwitcher theme={theme} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
