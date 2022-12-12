/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 3s linear infinite',
        'dance': 'wiggle 1s ease-in-out infinite'
      },
      keyframes:{
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%' : { transform: 'rotate(3deg)' } 
        }
      },
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
