/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'form-bg':'#ee9d37',
        'form-blue':'#4cd4fc',
        'form-blue-dark':'#1fa7d5',
        'button-hover':'#f6f6f6',
        'button-hover-dark':'#888888',
        'footer':"#f2f2f2",
      },
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "white",
          "secondary": "black",
          "accent": "#FFF232",
          "neutral": "#1A1A1A",
          "base-100": "white",
          "info": "white",
          "success": "#823290",
          "warning": "#EE8133",
          "error": "#E93F33",
        },
      },
    ],
  },

  plugins: [
    require("daisyui"),
  ],
}
