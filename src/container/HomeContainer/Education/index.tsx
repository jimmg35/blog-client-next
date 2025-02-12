import { AcademicCapIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from "next/legacy/image"

const Education = () => {
  const t = useTranslations('Educations')
  const educations = [
    {
      company: t('phd_school_name'),
      role: t('phd_major'),
      start: t('phd_start_year'),
      end: t('phd_end_year'),
      icon: '/icons/fsu.png'
    },
    {
      company: t('graduate_school_name'),
      role: t('graduate_major'),
      start: t('graduate_start_year'),
      end: t('graduate_end_year'),
      icon: '/icons/ntnu.svg'
    },
    {
      company: t('undergraduate_school_name'),
      role: t('undergraduate_major'),
      start: t('undergraduate_start_year'),
      end: t('undergraduate_end_year'),
      icon: '/icons/ntnu.svg'
    }
  ]
  return (
    <div className="rounded-2xl p-6 border border-error">
      <div className="flex items-center text-sm font-semibold ">
        <AcademicCapIcon className="w-6 h-6" />
        <span className="ml-3">{t('title')}</span>
      </div>
      <ol className="mt-6 space-y-4">
        {educations.map((edu, index) => (
          <li className="flex gap-4" key={index}>
            <div className="relative bg-base-100 border border-error mt-1 flex h-12 w-12 shadow-lg flex-none items-center justify-center rounded-full">
              <Image src={edu.icon} width={32} height={32} alt="NTNU" />
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
