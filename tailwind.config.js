/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Aeonik Pro Regular': '"AeonikPro"',
        'general': '"Inter V", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom , #0b0622, #0c0623 , #0d0723)',
      },
    },
  },
  plugins: [],
}