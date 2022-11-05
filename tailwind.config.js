/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", 'ganbare.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}
