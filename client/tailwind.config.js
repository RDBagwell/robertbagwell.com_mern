/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: 'Roboto, sans-serif'
    },
    extend: {
      screens: {
        sm: {'max': '480px'},
        md: {'max': '768px'},
        lg: {'max': '976px'},
        xl: {'max': '1440px'},
      },
    },
  },
  plugins: [],
}