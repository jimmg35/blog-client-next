import React from 'react'
import classNames from 'classnames'
import { useLocale, useTranslations } from 'next-intl'

const Introduction = () => {
  const locale = useLocale()
  const t = useTranslations('Introduction')
  return (
    <>
      <div className="avatar">
        <div className="rounded-full w-20 border border-zinc-400">
          <img src="/images/oh-crap.jpg" />
        </div>
      </div>

      <div className="flex gap-2 text-4xl font-bold tracking-tight sm:text-5xl ">
        <h1>{t('A')} </h1>
        <h1
          className={classNames({
            JobTitle: true,
            'type-en': locale === 'en',
            'type-zh': locale === 'zh',
            'type-ru': locale === 'ru'
          })}
        ></h1>
      </div>
      <p className="mt-6 prose text-justify font-normal">{t('paragraph1')}</p>
      <p className="mt-6 prose text-justify">{t('paragraph2')}</p>
    </>
  )
}

export default Introduction
