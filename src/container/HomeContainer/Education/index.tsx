import { AcademicCapIcon } from '@heroicons/react/24/solid'
import React from 'react'

const educations = [
  {
    company: 'National Taiwan Normal University',
    role: 'Master in Geographic Information Science',
    start: '2022',
    end: 'Present',
    icon: '/icons/ntnu.svg'
  },
  {
    company: 'National Taiwan Normal University',
    role: 'Bachelor in Geography',
    start: '2022',
    end: 'Present',
    icon: '/icons/ntnu.svg'
  }
]

const Education = () => {
  return (
    <div className="rounded-2xl p-6 border border-error">
      <div className="flex items-center text-sm font-semibold ">
        <AcademicCapIcon className="w-6 h-6" />
        <span className="ml-3">Academy</span>
      </div>
      <ol className="mt-6 space-y-4">
        {educations.map((edu, index) => (
          <li className="flex gap-4" key={index}>
            <div className="relative bg-base-100 border border-error mt-1 flex h-12 w-12 shadow-lg flex-none items-center justify-center rounded-full">
              <img className="w-8 h-8" src={edu.icon} />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-bold ">
                {edu.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs">{edu.role}</dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs " aria-label="2022 until Present">
                <time>{edu.start}</time> <span aria-hidden="true">—</span>{' '}
                <time>{edu.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Education
