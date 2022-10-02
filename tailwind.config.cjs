/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx, ts, js, tsx}'],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
