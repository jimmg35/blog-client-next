import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwind-typewriter')({
      wordsets: {
        en: {
          words: ['software developer', 'researcher', 'Ph.D. student'],
          writeSpeed: 0.05,
          eraseSpeed: 0.05,
          pauseBetween: 2
        },
        zh: {
          words: ['軟體工程師', '研究者', '博士生'],
          writeSpeed: 0.05,
          eraseSpeed: 0.05,
          pauseBetween: 2
        },
        'zh-cn': {
          words: ['软件工程师', '研究者', '博士生'],
          writeSpeed: 0.05,
          eraseSpeed: 0.05,
          pauseBetween: 2
        },
        ru: {
          words: ['разработчик', 'Исследователь', 'студент'],
          writeSpeed: 0.05,
          eraseSpeed: 0.05,
          pauseBetween: 2
        }
      }
    })
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#34D399',
          'base-100': '#FFFFFF',
          'base-200': '#FFFFFF',
          'base-300': '#FAFAFA',
          error: '#F4F4F5'
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#34D399',
          'base-100': '#252529',
          'base-200': '#18181B',
          'base-300': '#000000',
          error: '#27272C'
        }
      }
    ]
  }
}
export default config
