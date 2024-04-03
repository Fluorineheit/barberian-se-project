/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
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

