/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      spacing:{
        13: '3.25rem'
      },
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
      }
    },
  },
  plugins: [],
}
