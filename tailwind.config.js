/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      'footer-title': '2vmax',
      'footer-item': '1vmax',
    },
    height: {
      'fullpageminusnavbar' : '92.5vh'
    }
  },
  plugins: [],
}