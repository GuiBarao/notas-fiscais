import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from "./App.js"
import NFSE from './pages/notas/index.js';
import AppProvider from './contexts/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <NFSE />
    </AppProvider>
  </React.StrictMode>
);


