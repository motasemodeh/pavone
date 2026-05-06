import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { motion } from 'framer-motion';

const AllProductsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContact = (product: any) => {
    navigate('/quote', { state: { product } });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div {...fadeInUp} style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      <ProductGrid onContact={handleContact} title="All Products" searchQuery={searchQuery} />
    </motion.div>
  );
};

export default AllProductsPage;
