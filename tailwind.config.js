/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '310px',
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
      colors: {
        'gray-light': '#d3dce6',
        'theme':'#00bfffde',
      },
    },
  },
  plugins: [],
}
