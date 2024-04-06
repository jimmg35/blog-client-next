'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

export type Theme = 'light' | 'dark'

const ThemeSwitcher = ({ theme }: { theme: Theme }) => {
  const [_theme, settheme] = useState<Theme>(theme)

  const toogleTheme = () => {
    const root = document.getElementsByTagName('html').item(0)
    if (!root) return
    const rootTheme = root.getAttribute('data-theme')

    if (rootTheme === 'light') {
      root.setAttribute('data-theme', 'dark')
      settheme('dark')
    } else {
      root.setAttribute('data-theme', 'light')
      settheme('light')
    }
  }

  return (
    <div className="pointer-events-auto ">
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="h-[38px] calcite-box rounded-full px-3 py-2 bg-base-100  border border-error"
        onClick={toogleTheme}
      >
        {_theme === 'dark' ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}

export default ThemeSwitcher
