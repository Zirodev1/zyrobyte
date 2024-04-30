import React from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PCBuilder from './components/PCBuilder';
import Services from './components/Services';
import Contact from './components/Contact';
import RepairRequestForm from './components/RepairRequestForm';
import DataRecoveryForm from './components/DataRecoveryForm';
import WebDevelopment from './components/WebDevelopment';

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
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
