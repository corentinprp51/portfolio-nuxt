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
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-up': 'fade 1s ease-in-out'
      }
    }
  },
  plugins: []
}
