/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'form-bg':'#ee9d37',
        'form-blue':'#4cd4fc',
        'form-blue-dark':'#1fa7d5'
      }
    },
  },
  plugins: [],
}
