import { url } from 'inspector'

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
        black: '#303841',
        full_black: '#24292f'
      },
      backgroundImage: theme => ({
        'background-home': url('/images/background.png')
      })
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

