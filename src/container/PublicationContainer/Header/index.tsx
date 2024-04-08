import React from 'react'
import { useTranslations } from 'next-intl'

const Header = () => {
  const t = useTranslations('Publications')
  return (
    <header className="max-w-2xl">
      <h1 className=" text-4xl font-bold tracking-tight sm:text-5xl">
        {t('Title')}
      </h1>
      <p className="text-justify mt-6 text-lg ">{t('Description')}</p>
    </header>
  )
}

export default Header
