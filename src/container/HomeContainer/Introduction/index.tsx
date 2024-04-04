import React from 'react'
import classNames from 'classnames'

const Introduction = () => {
  return (
    <>
      <div className="avatar">
        <div className="rounded-full w-20 border border-zinc-400">
          <img src="/images/oh-crap.jpg" />
        </div>
      </div>

      <div className="flex gap-2 text-4xl font-bold tracking-tight sm:text-5xl ">
        <h1>A </h1>
        <h1
          className={classNames({
            JobTitle: true,
            'type-en': true
          })}
        ></h1>
      </div>
      <p className="mt-6 prose text-justify font-normal">
        I'm Jim, a self-motivated student developer with the actual experience
        of over three years collaborating and working on multiple web-based
        projects of different domains, mostly integrating GIS techniques into
        the system, and providing a solution to the clients.
      </p>
      <p className="mt-6 prose text-justify">
        Passionate, hardworking programmer with experience in frontend
        frameworks such as React.js with Typescript and Tailwindcss, and Nest.js
        for developing backend services.
      </p>
    </>
  )
}

export default Introduction
