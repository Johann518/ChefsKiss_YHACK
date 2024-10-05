import React from 'react';
import About from './about';  // Adjust the path if needed
import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    
    <AnimatePresence mode='wait'>
      <Routes Location={location} key={location.path}>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searched/:search' element={<Searched />} />
          <Route path="/about" element={<About />} />
          <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}//end of Pages func

export default Pages