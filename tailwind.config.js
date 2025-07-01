/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
          text_primary: '#ffffff',
          text_secondary: "#1e1e1f",
          text_title:"#025B2D",
          background_primary: "#FFFFFF",
          background_red: "#9a0000",
          background_icon:"#005228",
          icon_primary: "#ffffff",
          icon_secondary: "#000000",
          border_primary: "#ffffff",
          border_secondary: "#343b3d44"
      }
    },
  },
  plugins: [],
}


