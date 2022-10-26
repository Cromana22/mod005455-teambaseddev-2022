import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Course from './components/Course';
import Courses from './components/Courses';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
    <Routes>    
    <Route path="/login" element={<LoginPage />} />
    <Route path="/homepage" element={<HomePage />} />
    <Route path="/course" element={<Course />} />
    <Route path="/courses" element={<Courses />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
