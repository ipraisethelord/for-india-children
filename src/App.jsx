import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import React from 'react';

// import Container from './components/reusable/Container';
// import Box from '@mui/material/Box';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Faq from './components/pages/Faq';
// import Contact from './components/pages/Contact';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Router from './components/reusable/Router';

function App() { 
 
  return (   
    <Router />
    
  )
}

export default App
//<button onClick={() => setCount((count) => count + 1)}>ount is {count}</button>
 {/* <Router>
          <Routes>
            <Route path='/' element={<Container><Box sx={{ display: 'flex' }} ><Home/></Box></Container>} />
            <Route path='/About' element={<Container><About /></Container>} />
            <Route path='/Faq' element={<Container><Faq /></Container>} />
            <Route path='/Contact' element={<Container><Contact /></Container>} />
          </Routes>
        </Router>
       */}