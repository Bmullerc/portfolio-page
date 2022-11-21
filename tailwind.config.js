/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'title-sans': ['Kantumruy Pro, sans-sereif'],
        'title-serif': ['Roboto Slab, serif;'],
        'body-sans': ['Raleway, sans-serif'],
      }
    },
  },
  plugins: [],
}