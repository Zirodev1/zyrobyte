import React from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PCBuilder from './components/PCBuilder';
import Services from './components/Services';
import Contact from './components/Contact';
import RepairRequestForm from './components/RepairRequestForm';
import DataRecoveryForm from './components/DataRecoveryForm';
import WebDevelopment from './components/WebDevelopment';
import About from './components/About';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/build-pc" element={<PCBuilder />} />
          <Route path="/services/repairs" element={<RepairRequestForm/>} />
          <Route path="/services/data-transfer" element={<DataRecoveryForm/>} />
          <Route path="/services/web-development" element={<WebDevelopment/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
