import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const Introduction = () => {
  const t = useTranslations('About')
  const externalLinks = [
    {
      icon: (
        <svg
          id="GitHub_24"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            stroke="none"
            fill="#000000"
            opacity="0"
          />

          <g transform="matrix(0.83 0 0 0.83 12 12)">
            <path
              transform=" translate(-15, -14.82)"
              d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 20.623 6.872 25.328 12.092 26.630000000000003 C 12.036 26.468 12 26.28 12 26.047 L 12 23.996000000000002 C 11.513 23.996000000000002 10.697 23.996000000000002 10.492 23.996000000000002 C 9.671000000000001 23.996000000000002 8.941 23.643 8.587000000000002 22.987000000000002 C 8.194 22.258000000000003 8.126000000000001 21.143 7.152000000000001 20.461000000000002 C 6.863000000000001 20.234 7.083000000000001 19.975 7.416000000000001 20.01 C 8.031 20.184 8.541 20.606 9.021 21.232000000000003 C 9.499 21.859 9.724 22.001 10.617 22.001 C 11.05 22.001 11.698 21.976000000000003 12.308000000000002 21.880000000000003 C 12.636000000000001 21.047000000000004 13.203000000000001 20.28 13.896 19.918000000000003 C 9.9 19.507 7.993000000000001 17.519000000000002 7.993000000000001 14.820000000000004 C 7.993000000000001 13.658000000000005 8.488000000000001 12.534000000000004 9.329 11.587000000000003 C 9.053 10.647 8.706 8.73 9.435 8 C 11.233 8 12.32 9.166 12.581 9.481 C 13.477 9.174 14.461 9 15.495 9 C 16.531 9 17.519 9.174 18.416999999999998 9.483 C 18.675 9.17 19.763 8 21.565 8 C 22.297 8.731 21.946 10.656 21.667 11.594 C 22.503 12.539 22.995 13.66 22.995 14.82 C 22.995 17.517 21.091 19.504 17.101 19.917 C 18.199 20.49 19 22.1 19 23.313 L 19 26.046999999999997 C 19 26.150999999999996 18.977 26.225999999999996 18.965 26.314999999999998 C 23.641 24.676 27 20.236 27 15 C 27 8.373 21.627 3 15 3 z"
            />
          </g>
        </svg>
      ),
      href: 'https://github.com/jimmg35',
      name: 'Follow on GitHub'
    },
    {
      icon: (
        <svg
          id="Instagram_24"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            stroke="none"
            fill="#000000"
            opacity="0"
          />

          <g transform="matrix(0.77 0 0 0.77 12 12)">
            <path
              transform=" translate(-13, -13)"
              d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"
            />
          </g>
        </svg>
      ),
      href: 'https://www.instagram.com/codetilldie/',
      name: 'Follow on Instagram'
    },
    {
      icon: (
        <svg
          id="LinkedIn_24"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            stroke="none"
            fill="#000000"
            opacity="0"
          />

          <g transform="matrix(1.11 0 0 1.11 12 12)">
            <path
              transform=" translate(-12, -12)"
              d="M 19 3 L 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 z M 9 17 L 6.477 17 L 6.477 10 L 9 10 L 9 17 z M 7.694 8.717 C 6.923 8.717 6.4079999999999995 8.203000000000001 6.4079999999999995 7.517 C 6.4079999999999995 6.8309999999999995 6.922 6.317 7.779 6.317 C 8.55 6.317 9.065 6.831 9.065 7.517 C 9.065 8.203 8.551 8.717 7.694 8.717 z M 18 17 L 15.558 17 L 15.558 13.174 C 15.558 12.116 14.907 11.872 14.663 11.872 C 14.419 11.872 13.605 12.035 13.605 13.174 C 13.605 13.337 13.605 17 13.605 17 L 11.082 17 L 11.082 10 L 13.605 10 L 13.605 10.977 C 13.93 10.407 14.581 10 15.802 10 C 17.023 10 18 10.977 18 13.174 L 18 17 z"
            />
          </g>
        </svg>
      ),
      href: 'https://www.linkedin.com/in/jimmg35/',
      name: 'Follow on LinkedIn'
    },
    {
      icon: (
        <svg
          id="Facebook_24"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            stroke="none"
            fill="#000000"
            opacity="0"
          />

          <g transform="matrix(0.91 0 0 0.91 12 12)">
            <path
              transform=" translate(-15, -15)"
              d="M 24 4 L 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 16 26 L 16 17 L 13 17 L 13 14 L 16 14 L 16 12.389 C 16 9.339 17.486 8 20.021 8 C 21.235 8 21.877000000000002 8.09 22.181 8.131 L 22.181 11 L 20.452 11 C 19.376 11 19 11.568 19 12.718 L 19 14 L 22.154 14 L 21.726 17 L 19 17 L 19 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.104 4 24 4 z"
            />
          </g>
        </svg>
      ),
      href: 'https://www.facebook.com/profile.php?id=100006963767811',
      name: 'Follow on Facebook'
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none relative">
          <Image
            src="/images/oh-crap.jpg"
            width={440}
            height={440}
            alt="avatar"
            className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className=" text-4xl font-bold tracking-tight sm:text-5xl">
          {t('Title')} <span className="JobTitle">{t('GIScience')}</span>.
        </h1>
        <div className="mt-6 text-lg prose space-y-7 dark:prose-invert">
          <p className="text-justify">{t('intro')}</p>
          <p className="text-justify">
            <b>{t('highlight_title_0')}:</b>
            {t('highlight_content_0')}
          </p>
          <p className="text-justify">
            <b>{t('highlight_title_1')}:</b>{' '}
            {t.rich('highlight_content_1', {
              guidelines: (chunks) => (
                <Link
                  href="https://www.ccisappraisers.com/"
                  className="text-primary"
                >
                  {chunks}
                </Link>
              )
            })}
          </p>
          <p className="text-justify">
            <b>{t('highlight_title_2')}:</b>{' '}
            {t.rich('highlight_content_2', {
              guidelines: (chunks) => (
                <Link href="https://jsdc.com.tw/" className="text-primary">
                  {chunks}
                </Link>
              )
            })}
            .
          </p>

          <p>
            I love Open Source, learning in public, and sharing what I learn
            with others.
          </p>
        </div>
      </div>

      <div className="lg:pl-20">
        <ul role="list">
          {externalLinks.map((link, index) => (
            <li key={index} className="mt-4">
              <Link
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex text-zinc-500 fill-zinc-500 items-center hover:text-primary hover:fill-primary text-sm font-medium transition"
              >
                {link.icon}
                <span className="ml-4">{link.name}</span>
              </Link>
            </li>
          ))}
          <li className="pt-8 mt-8 border-t border-error flex">
            <a
              className="flex text-sm font-medium transition group text-zinc-500 fill-zinc-500 hover:text-primary hover:fill-primary"
              href="mailto:me@brian.dev"
            >
              <svg
                id="Email_Send_24"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  stroke="none"
                  fill="#000000"
                  opacity="0"
                />

                <g transform="matrix(1 0 0 1 12 12)">
                  <path
                    transform=" translate(-12, -12)"
                    d="M 22 2 L 2 9.2714844 L 7.4375 14.710938 L 18 6 L 9.2890625 16.5625 L 14.728516 22 L 22 2 z"
                  />
                </g>
              </svg>
              <span className="ml-4">jim.alderson.ca@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Introduction
