/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
    extend: {      
      colors: {
        'grey-gx': '#2D2D2C',
        'orange-gx': '#F08573',
        'lightGrey-gx': '#F0F0F0'
      },
      fontFamily: {
        'title': ['Rock Salt', 'sans-serif'],
        'body': ['Barlow', 'sans-serif'],
      },
      fontSize: {
        about: ['60px', '70px'],
        bannerXL: ['171px', '171px'],
        bannerXXL: ['211px', '211px'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '95%',
          '@screen xl': {
            maxWidth: '1600px',
          },
        }
      })
    }
  ],
}