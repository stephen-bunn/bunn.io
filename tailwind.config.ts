import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

export default <Config>{
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'app.{vue,js,ts}',
    'error.{vue,js,ts}',
  ],
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        primary: {
          default: colors.blue[500],
          active: colors.blue[700],
        },
      },
      fontFamily: {
        sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Rajdhani', ...defaultTheme.fontFamily.serif],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
}
