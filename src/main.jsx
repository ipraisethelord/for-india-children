import React from 'react'

import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
     {/* <ScopedCssBaseline> */}
     <App />
     {/* </ScopedCssBaseline> */}
   
  </React.StrictMode>
)
