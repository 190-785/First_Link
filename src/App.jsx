import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'; // Ensure this import is present
import HomePage from './pages/HomePage'; // Import the new HomePage component

function App() {
  return (
    <Router basename="/First_Link">  {/* Set basename to match GitHub Pages subpath */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route for the home page */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
