import React from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PCBuilder from './components/PCBuilder';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/build-pc" element={<PCBuilder />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
