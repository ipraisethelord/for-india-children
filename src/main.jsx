// import React from 'react'
// import App from './App'
// import './index.css'
// import { createRoot } from 'react-dom/client';
// //import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
// import CssBaseline from "@mui/material/CssBaseline";
// import theme from "./theme";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// const domNode = document.getElementById('root');
// const root = createRoot(domNode);

// root.render(
//   <React.StrictMode>
 
//      <ThemeProvider theme={theme}> 
//      <CssBaseline /> 
//      <App />
   
//      </ThemeProvider>
//   </React.StrictMode>
// )
import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
 
);


