/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  mode: 'jit',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#2185D5',
        // secondary: '#F3F3F3',
        // tertiary: '#3A4750',
        // quaternary: '#303841',
        blue: '#2185D5',
        white: '#F3F3F3',
        grey: '#3A4750',
        black: '#303841'
      }
    },
  },
  plugins: [],
}

