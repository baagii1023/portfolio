//app.jsx
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import  Hero  from './components/Hero'
import  About from './components/About'
import  Navbar  from './components/Navbar'

import  Tech  from './components/Tech';




function App() {
  
  return (
    <BrowserRouter>
    <div className="relative z-0">
      <div>
        <Navbar />
        <Hero />
      </div>

      <div className="bg-about bg-cover bg-center bg-no-repeat">
        <About />
      </div>

      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <Tech />
      </div>

      {/* <Projects /> */}

      <div
        className="bg-experience bg-cover bg-center bg-no-repeat 
          rounded-tl-[150px] rounded-br-[150px]">
        <div
          className="bg-experienceLight bg-cover bg-center 
          bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
          {/* <Experience /> */}
        </div>
      </div>
      <div className="relative z-0">
        {/* <Contact /> */}
      </div>
    </div>
  </BrowserRouter>
  );
};

export default App
