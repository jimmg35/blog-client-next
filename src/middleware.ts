import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

export default function middleware(req: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'zh-tw', 'zh-cn', 'ru'],
    defaultLocale: 'en'
  })
  const response = handleI18nRouting(req)
  response.headers.set('x-url', req.url)
  return response
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|zh-tw|zh-cn|ru)/:path*']
}
