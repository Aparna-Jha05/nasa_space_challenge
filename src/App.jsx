import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import {HomePage} from './pages/home';
import {ResourcePage} from './pages/resource';
import {AboutPage} from './pages/about';
import {UserDashboard} from './pages/userDashboard';
import {Visualize} from './pages/visualize';
import {Login} from './pages/login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resource" element={<ResourcePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/visualize" element={<Visualize />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;