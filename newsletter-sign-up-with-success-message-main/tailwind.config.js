/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem'
      },
      colors: {
        'gray-dark': '#242742',
        'gray-light': '#9294a0',
        grey: '#36384e',
        primary: {
          400: '#ff6257'
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans']
      }
    }
  },
  plugins: []
};
