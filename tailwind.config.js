/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        transparent: 'transparent',
        brand: {
          300: '#F53855',
          500: '#F53838',
        },
        dark: {
          100: '#F6F6F6',
          200: '#F8F8F8',
          300: '#EEEFF2',
          400: '#DDDDDD',
          500: '#4F5665',
          900: '#0b132a',

        },
        grey: {
          300: '#DDE0E4',
        }
      },
      lineHeight: {
        'hero': '4.375rem',
      }
    },
  },
  plugins: [],
}
