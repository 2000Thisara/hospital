// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doctor_attending from './Components/Doctor_attending';
import Nurse_attending from './Components/Nurse_attending';
import Patient_attending from './Components/Patient_attending';
import Home_page from "./Components/Home_page"
import Admin_home_page from './Components/Admin_home_page';
// Import other components here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home_page/>} />
        <Route path="/Doctors_attending" element={<Doctor_attending />} />
        <Route path="/Nurses_attending" element={<Nurse_attending/>} />
        <Route path="/Patients_attending" element={<Patient_attending />} />
        <Route path="/admin" element={<Admin_home_page />} />
        
        {/* Add routes for other components here */}
      </Routes>
    </Router>
  );
}

export default App;
