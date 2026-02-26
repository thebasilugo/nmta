import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import IndustryEvents from './pages/IndustryEvents';
import CreatorsHub from './pages/CreatorsHub';
import Awards from './pages/Awards';
import NewsBlog from './pages/NewsBlog';
import MoviesShows from './pages/MoviesShows';
import LoadingScreen from './components/LoadingScreen';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<IndustryEvents />} />
              <Route path="/creators" element={<CreatorsHub />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/news" element={<NewsBlog />} />
              <Route path="/movies" element={<MoviesShows />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
