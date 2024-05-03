import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './components/Detail';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Detail/:projectId" element={<Detail />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
