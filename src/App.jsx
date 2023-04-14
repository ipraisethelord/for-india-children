import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from './components/reusable/Container';

import Home from './components/pages/Home';
import About from './components/pages/About';

import Faq from './components/pages/Faq';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
    
      <Router>
          <Routes>
            <Route path='/' element={<Container maxWidth='false'><Home/></Container>} />
            <Route path='/About' element={<Container><About /></Container>} />
            <Route path='/Faq' element={<Container><Faq /></Container>} />
            <Route path='/Contact' element={<Container><Contact /></Container>} />
          </Routes>
        </Router>
      
     
   
    </ThemeProvider>
   
     
      
  )
}

export default App
//<button onClick={() => setCount((count) => count + 1)}>ount is {count}</button>