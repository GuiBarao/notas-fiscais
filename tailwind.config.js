/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
          main_color: '#133630',
          body_background: '#112422',
          main_text_color: '#ffffff',
          background_input_color: '#425E59',
          border_input_color: '#A0AEAC',
          destaque_nota_invalida: '#7e2323',
          linha_info_erro: '#ffffff67',
          titulo_notas_fiscais: '#88F75B',
          disabled: '#e0e0e0'

      },
    },
  },
  plugins: [],
}


