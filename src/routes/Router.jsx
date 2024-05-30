import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import NotFound from '../components/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
