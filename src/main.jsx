import React from 'react'

import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client';
//import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
     {/* <ScopedCssBaseline> */}
     <ThemeProvider theme={theme}> 
     <CssBaseline /> 
     <App />
     {/* </ScopedCssBaseline> */}
     </ThemeProvider>
  </React.StrictMode>
)
