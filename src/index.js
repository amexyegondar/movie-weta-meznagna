import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import poppin from './asset/font/Poppins/Poppins-SemiBold.ttf'
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/Favoritecontext';
import { TopratedDataProvider } from './context/Topratedcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette:{
   background:{
    default:"black"
   }
  },
  typography: {
    fontFamily: poppin,
    fontStyle: "normal",
    fontWeight: 400,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${poppin}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
root.render(
  <TopratedDataProvider>
  <DataProvider>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>
    </BrowserRouter>
    
  </ThemeProvider>
  </DataProvider>
  </TopratedDataProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
