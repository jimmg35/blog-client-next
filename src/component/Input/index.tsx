import React from 'react'

const Input = ({
  icon,
  placeholder,
  value,
  onChange
}: {
  icon: React.ReactNode
  placeholder: string
  value: string
  onChange: (value: string) => void
}) => {
  return (
    <div className="relative calcite-box">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm">{icon}</span>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border border-error calcite-focus py-1.5 pl-10 pr-20  sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
