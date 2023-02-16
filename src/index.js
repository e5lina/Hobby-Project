import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './style/GlobalStyles';
import GlobalFonts from './style/font/fonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyle />
      <GlobalFonts />
    </BrowserRouter>
  </React.StrictMode>,
);
