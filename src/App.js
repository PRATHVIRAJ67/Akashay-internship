import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Homepage from './Components/Homepage.js';
import SecondPage from './Components/SecondPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />  
        <Route path="/second" element={<SecondPage />} />  
      </Routes>
    </Router>
  );
}

export default App;
