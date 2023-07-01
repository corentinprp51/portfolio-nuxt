/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Montserrat', 'Arial', 'Helvetica', 'sans-serif']
    },
    extend: {
      colors: {
        default: '#111111',
        'input-bg': '#414141',
        'red-bg': '#526527'
      }
    }
  },
  plugins: []
}
