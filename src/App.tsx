import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopVendors from './components/TopVendors';
import ProductGrid from './components/ProductGrid';
import HotCollections from './components/HotCollections';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import BecomeCustomerPage from './pages/BecomeCustomerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { motion } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();

  const handleContact = (product: any) => {
    navigate('/become-a-customer', { state: { product } });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Hero />
      <motion.div {...fadeInUp}>
        <TopVendors />
      </motion.div>
      <HomeContent />
      <motion.div {...fadeInUp} id="products">
        <ProductGrid onContact={handleContact} />
      </motion.div>
      <motion.div {...fadeInUp} id="collections">
        <HotCollections />
      </motion.div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/become-a-customer" element={<BecomeCustomerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
