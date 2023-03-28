/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)', ...fontFamily.sans],
        serif: ['var(--font-bellefair)', ...fontFamily.serif],
        condensed: ['var(--font-barlow-condensed)', ...fontFamily.sans],
      },
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
        tertiary: '#FFFFFF',
      },

      letterSpacing: {
        subtitle: '0.16875em',
      },

      transitionProperty: {
        height: 'height',
        width: 'width',
      },
    },
  },
  plugins: [],
}
