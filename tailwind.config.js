/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato:'"Lato", sans-serif'
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('preline/plugin'),
  ],
}

