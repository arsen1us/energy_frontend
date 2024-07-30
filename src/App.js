import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Go_to_register_page</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
