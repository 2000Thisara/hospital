// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin_home_page from './Components/Admin_home_page';
import Doctor_attending from './Components/Doctor_attending';
import Nurse_attending from './Components/Nurse_attending';
import Patient_attending from './Components/Patient_attending';
// Import other components here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin_home_page />} />
        <Route path="/Doctors_attending" element={<Doctor_attending />} />
        <Route path="/Nurse_attending" element={<Nurse_attending/>} />
        <Route path="/Patient_attending" element={<Patient_attending/>} />
        {/* Add routes for other components here */}
      </Routes>
    </Router>
  );
}

export default App;
