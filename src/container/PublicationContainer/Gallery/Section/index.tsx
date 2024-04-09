import React from 'react'

const Section = ({
  category,
  children
}: {
  category: string
  children: React.ReactNode
}) => {
  return (
    <section
      aria-labelledby=":r3:"
      className="md:border-l md:border-error md:pl-6 md:dark:border-error"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 id=":r3:" className="text-sm font-semibold">
          {category}
        </h2>
        <div className="md:col-span-3">
          <div className="space-y-16 pb-8">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default Section
