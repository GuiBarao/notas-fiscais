import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from "./App.js"
import NFSE from './pages/notas/index.js';
import AppProvider from './contexts/index.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/*main_color: '#133630',
          body_background: '#112422',
          main_text_color: '#ffffff',
          background_input_color: '#425E59',
          border_input_color: '#A0AEAC',
          destaque_nota_invalida: '#7e2323',
          linha_info_erro: '#ffffff67',
          titulo_notas_fiscais: '#88F75B',
          disabled: '#e0e0e0'*/ 


const theme = createTheme({
  palette: {
    primary: {
      main: '#133630',
      text: "#ffffff"
    },
    background: {
      default: "#112422",
      input: "#425E59",
      notaInvalida: "#7e2323"
    },
    border: {
      main:"#A0AEAC"
    },
    linhaInfoErro: {
      main: "#ffffff67"
    },
    tituloNotasFiscais: {
      main: '#88F75B'
    }
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif'
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <NFSE />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>
);


