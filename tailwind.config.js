/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'app-darg-gray': '#27262a',
        'primary': '#ff3b00'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

