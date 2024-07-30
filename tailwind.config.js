/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "t-",
  theme: {
    extend: {
        screens: {
        xs: { min: '300px' },
        sm: { min: '600px' },
        md: { min: '770px' },
        lg: { min: '1100px' },
        xl: { min: '1920px' },
      },
      colors: {
        primary: '#ffffff',
        secondary: '#fbfbfb',
        accent: '#5271ff',
        hover: '#edf1ff'
      },
    },
  },
  plugins: [],

};
