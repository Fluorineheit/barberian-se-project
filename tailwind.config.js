/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  important: "#root",
  theme: {
    extend: { 
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}

