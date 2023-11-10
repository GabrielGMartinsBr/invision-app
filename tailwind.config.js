/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'app-darg-gray': '#27262a'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

