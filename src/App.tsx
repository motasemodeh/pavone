
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopVendors from './components/TopVendors';
import ProductGrid from './components/ProductGrid';
import HotCollections from './components/HotCollections';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import QuotePage from './pages/QuotePage';
import AllProductsPage from './pages/AllProductsPage';

import { motion } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();

  const handleContact = (product: any) => {
    navigate('/quote', { state: { product } });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <motion.div {...fadeInUp}>
        <Hero />
      </motion.div>
      <motion.div {...fadeInUp}>
        <TopVendors />
      </motion.div>
      <motion.div {...fadeInUp}>
        <ProductGrid onContact={handleContact} limit={4} />
      </motion.div>
      <motion.div {...fadeInUp}>
        <HotCollections />
      </motion.div>
      <motion.div {...fadeInUp}>
        <HowItWorks />
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
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
