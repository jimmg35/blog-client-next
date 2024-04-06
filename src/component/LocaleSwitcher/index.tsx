import React from 'react'
import Image from 'next/image'

const LocaleSwitcher = () => {
  return (
    <div className="pointer-events-auto ">
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="h-[38px] calcite-box rounded-full px-3 py-2 bg-base-100  border border-error"
        // onClick={toogleTheme}
      >
        {/* {_theme === 'dark' ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5" />
        )} */}
        <Image src="/icons/tw.svg" width={20} height={20} alt="TW" />
        <Image src="/icons/us.svg" width={20} height={20} alt="US" />
      </button>
    </div>
  )
}

export default LocaleSwitcher
