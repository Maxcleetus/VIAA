import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Chatboat from './pages/Chatboat';
import Home from './pages/Home';
import District from './pages/District';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PreLoader from './pages/PreLoader';
import MicSearch from './pages/MicSearch';
const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(false);
    }, 3000); // Ensure this matches the total PreLoader time
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div >
      {load ?
        <PreLoader /> :
        <div className='bg-[#08386F]/10 px-32 py-4'>
          <NavBar />
          <Chatboat/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/district/" element={<District />} />
            <Route path="/district/:id" element={<District />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      }
    </div>
  );
};

export default App;
