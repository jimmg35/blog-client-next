'use client'

import { LanguageIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const getClientPathname = (url: string) => {
  const match = url.match(/\/(zh|ru|en)\/(.*)/)
  if (match) return `/${match[2]}`
  return '/'
}

const LocaleSwitcher = () => {
  // const headersList = headers()
  // const url = headersList.get('x-url') || ''
  // console.log(url)

  const pathname = getClientPathname(usePathname())

  // const t = useTranslations('Locale')
  const locales = [
    {
      href: `/en${pathname}`,
      name: 'English',
      icon: <Image src="/icons/us.svg" width={24} height={24} alt="English" />
    },
    {
      href: `/zh${pathname}`,
      name: '繁體中文',
      icon: <Image src="/icons/tw.svg" width={24} height={24} alt="English" />
    },

    {
      href: `/ru${pathname}`,
      name: 'Русский',
      icon: <Image src="/icons/ru.svg" width={24} height={24} alt="English" />
    }
  ]

  return (
    <>
      <label
        htmlFor="locale_modal"
        className="h-[38px] calcite-box rounded-full px-3 py-2 bg-base-100 cursor-pointer hover:text-primary"
      >
        <LanguageIcon className="w-5 h-5" />
      </label>

      <input type="checkbox" id="locale_modal" className="modal-toggle" />
      <div className="modal backdrop-blur-sm" role="dialog">
        <div className="modal-box absolute top-[25px]">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-light">Locale</h3>
            <label
              className="btn btn-sm btn-circle btn-ghost "
              htmlFor="locale_modal"
            >
              ✕
            </label>
          </div>

          <nav className="mt-6">
            <ul className="-my-2 divide-y divide-base-200 text-base ">
              {locales.map((locale, index) => (
                <li key={index}>
                  <Link
                    className="hover:text-primary py-2 flex gap-1 juctify-center items-center"
                    data-headlessui-state="open"
                    href={locale.href}
                  >
                    {locale.icon}
                    <span>{locale.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <label className="modal-backdrop" htmlFor="locale_modal"></label>
      </div>
    </>
  )
}

export default LocaleSwitcher
