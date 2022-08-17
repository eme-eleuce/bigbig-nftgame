import React from "react";
import Hero from "./componentes/hero";
import Section from "./componentes/Section";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/section' element={<Section />} />
      </Routes>
      
      

    </div>
         
  );
}

export default App;



