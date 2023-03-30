/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'min-md': {'max': '767px'},
      },
      colors: {
        'primary': '#0A0A0A',
        't-gray': '#3A3A3A',
        't-green': '#2B5341',
        't-dark-gray': '#171715',
      },
      boxShadow: {
        'iphone': '-30px -120px 160px -55px',
      }
    },
  },
  plugins: [],
}

