import { BriefcaseIcon } from '@heroicons/react/24/solid'
import React from 'react'

const jobs = [
  {
    company: 'China Credit Information Service Ltd.',
    role: 'Research and Development Engineer',
    start: '2023',
    end: 'Present',
    icon: (
      <img
        className="XNo5Ab"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAmVBMVEXx2trlW2DmYGPjREzjNDrjUVfrlJbldnvmc3XlYmfjTVPjQUTlgYP39/XhJjDlAADlAA/lAAjjAADiAADmAAXiFR/vtLXkAADkSE3jOj/8///lABTmhortubrhAADlAAfnq67kaGzdAAD14N/wwMD08O/16+vw0tPtoaLiHijspqbhJS7lABDplpnpl5n05ufyycvnuLjpiYhoQrtSAAACNklEQVR4AS2QB7KjMAxARW8GUWJMLDDdlJDyc//DLWT2eTztqQMYpmEYlu24nh+EQRSGVmh7nmV4LIYE0XQwTbO8wFt2y054KTDNEBlUaXqX94ywbpCIBFJqS0V0K1oH7JSw6/C/FE1fFFwOSpmjCMDJ0JE2FqouVSHENAOAPL+GSwoWc2SznmOtO2zqPE9jheguGMD9DsMoUKm6USrHcsV0iwvCfcIH1IhKiyO6etobPju88bjIxPTCOzyOQ+m8mgc1qDPSjlmUzEPkxry1IPnJSI7jCNLD27YvbzkuK7VEYKWHmou7zoUQ4CGliGpWiCkRh/spY2XPeZv9JNGxxTld8F+mVPm8O2Et7TOe0k0WlzsSsI8jn/J0eH2WPUE6MjqKj6D0l+lknJDyQp0U4tgqFL0nMDpOCwFWsS3+Pvp8H4akrcZzd+c6Ep0DofPODffdjTtLUEE/+q/Gl2vnt6fMIlDSXpypX5e7ZsU8Le/99ep+e+ZQ89idJ92UC6lge9R1EiafAA+wkMlaVEZYVY6z8eXt7WW527sM8VzloZmr9LTvezf6hvl6lWU5GdPoIoeqVV9Xya7rym5ZBZa+5QJfarYLgl7g96Xi3mPM614oFmOddBmiVyKBi/hdVfxnhE6gGap4MGqIOAbTKb1LYrXIUcu1uFXvxOvejOUVCIIww++Om+4LBV0ulm+/v1zXzUiqFIy2NRk2DI9UfRh/F3ghKAe+QU1044S4JfwQ4ij4CV0M9PkHC19GWpgMHMcAAAAASUVORK5CYII="
        alt=""
        data-csiid="10"
        data-atf="4"
      />
    )
  },
  {
    company: 'NADI System Corp.',
    role: 'Intern Web Developer',
    start: '2020',
    end: '2022',
    icon: (
      <img
        className="XNo5Ab"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEVHcExGfbhGebVGe7VGe7VGerVGerVGe7VGe7VGerVIfLhGerVGerVIerZHebRGebVtzxtvAAAAEHRSTlMAO7L/8sDlbH6ZKhRdzNpRrGhgJAAAAHhJREFUeAFjYBAycXExZQCCxGBjY0cQw1m8vFNgNYgx564AeyqQYdxp/JoTqIjbuMjYnNMIxPhqZsxkycDAZSzrY9xkwcDAaLzWqtjEHMRY57XP2J6Bgd/4ixejsSEDA4/xvygGvVsMDOymDBDAYQhlsBZAGexQGgCT5BdN2qM7CAAAAABJRU5ErkJggg=="
        alt=""
        data-csiid="9"
        data-atf="1"
      />
    )
  },
  {
    company: 'Interactive Digital Technologies Inc.',
    role: 'Intern GIS Developer',
    start: '2019',
    end: '2021',
    icon: (
      <img
        className="XNo5Ab"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEVHcEwmUZcYSZMbTJUeTZUWSJMcTZUTRpETRpEZSpQ2YaEORJAtWZ0aS5SMpsxBaKUsV5seTpY5YKBqirnP2ukYSZNQda1Sdq5EbKgvXJ4sV5sSRpESRpEnVJlLcKqFoMeOp8tOdq50kr/Q2+tIb6pPda0KCYejAAAAJnRSTlMAEFitm0OB9f+8Hf/CbRic7v3iegrpWbuDJTDWx9LWiEJAXx/mZ+9evEsAAAEJSURBVHgB1I+FgcQwEAMTo8LMDN9/i7/eZ7gCbsKSvIq958MXUulHprFAEP7vhQEixN/MUItE+B6TZnlRVvWXqRoLlb5Xtl3Xv70PI6EnwKpxYEXMyyJDjsmZmCyAZjK1UxQQxbxSgyjA9yLjUQG99zwjodi6LQDWbds53lDu8HUiRklv/ThTJYeJxCLKk5mKJoo1reA7W1yJhoS8dG3LYSzdB48ZZjB5dboy6WYjHnw2hY2iiFqytCbZciUaaXhtu65rzi00gx5pjIhYRmfW13VlpB6eaHi/e3ffa1el3jsvBZpEz4jy0yOuq/a+uDpqs+6nSP3D3pV5XnYnef9w7ee5X6+jT8IDANBLEyOi+1VlAAAAAElFTkSuQmCC"
        alt=""
        data-csiid="8"
        data-atf="1"
      />
    )
  }
]

const Jobs = () => {
  return (
    <div className="rounded-2xl p-6 border border-error">
      <div className="flex items-center text-sm font-semibold ">
        <BriefcaseIcon className="w-6 h-6" />
        <span className="ml-3">Work</span>
      </div>
      <ol className="mt-6 space-y-4">
        {jobs.map((job, index) => (
          <li className="flex gap-4" key={index}>
            <div className="relative bg-base-100 border border-error mt-1 flex h-12 w-12 shadow-lg flex-none items-center justify-center rounded-full">
              {job.icon}
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-bold ">
                {job.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs">{job.role}</dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs " aria-label="2022 until Present">
                <time>{job.start}</time> <span aria-hidden="true">—</span>{' '}
                <time>{job.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-base-100 calcite-box font-medium  group mt-6 w-full"
        href="https://www.linkedin.com/in/jimmg35/"
        target="_blank"
      >
        Checkout my{' '}
        <div className="fill-primary">
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
        </div>{' '}
        LinkedIn
      </a>
    </div>
  )
}

export default Jobs
