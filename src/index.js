import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.js"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: "#ffffff",
      secondary: "#1e1e1f",
      title:"#025B2D"
    },
    background: {
      primary: "#FFFFFF",
      notaInvalida: "#9a0000",
    },
    icon: {
      primary: "#ffffff",
      secondary: "#000000"
    },
    border: {
      primary: "#ffffff",
      secondary: "#343b3d44"
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif'
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);


