import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import AuthenticatePage from './pages/AuthenticatePage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Go_to_register_page</Link>
        <Link to="/authenticate">Go_to_authenticate_page</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/authenticate" element={<AuthenticatePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
