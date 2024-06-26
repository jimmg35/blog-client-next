import Background from '@/component/Background'
import Footer from '@/component/Footer'
import NavBar from '@/component/NavBar'
import ClientCookiesProvider from '@/cookie'
import {
  DocumentTextIcon,
  HomeIcon,
  NewspaperIcon,
  UserIcon
} from '@heroicons/react/24/solid'
import React from 'react'
// import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { Noto_Sans_TC } from 'next/font/google'
import { cookies } from 'next/headers'
import '../globals.css'

const noto = Noto_Sans_TC({
  weight: ['400', '500', '800'],
  subsets: ['latin']
})

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app'
// }

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const t = useTranslations('Index')
  const rt = useTranslations('Routes')
  const theme = cookies().get('theme')

  const routes = [
    {
      name: rt('Home'),
      href: `/${locale}`,
      icon: <HomeIcon className="w-4 h-4" />
    },
    {
      name: rt('About'),
      href: `/${locale}/about`,
      icon: <UserIcon className="w-4 h-4" />
    },
    // {
    //   name: rt('Education'),
    //   href: `/${locale}/education`,
    //   icon: <AcademicCapIcon className="w-4 h-4" />
    // },
    // {
    //   name: rt('Work'),
    //   href: `/${locale}/work`,
    //   icon: <BriefcaseIcon className="w-4 h-4" />
    // },
    {
      name: rt('Articles'),
      href: `/${locale}/articles`,
      icon: <NewspaperIcon className="w-4 h-4" />
    },
    {
      name: rt('Publications'),
      href: `/${locale}/publications`,
      icon: <DocumentTextIcon className="w-4 h-4" />
    }
  ]
  return (
    <ClientCookiesProvider value={cookies().getAll()}>
      <html lang={locale} data-theme={theme ? theme.value : 'light'}>
        <head>
          <title>{t('tabTitle')}</title>
          <link rel="icon" type="image/x-icon" href="/favicon.svg"></link>
        </head>
        <body className={`${noto.className} bg-base-300`}>
          <Background />
          <div className="relative w-full min-h-[100dvh] h-fit overflow-x-hidden">
            <NavBar routes={routes} />
            {children}
            <Footer routes={routes} />
          </div>
        </body>
      </html>
    </ClientCookiesProvider>
  )
}
