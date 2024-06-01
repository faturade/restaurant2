import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Galery from './pages/Galery';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/resevation" element={<Reservation />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
