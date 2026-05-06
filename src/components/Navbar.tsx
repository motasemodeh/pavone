import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const mockProducts = [
  { id: 1, title: 'Premium Red', price: '$80' },
  { id: 2, title: 'Gold Reserve', price: '$120' },
  { id: 3, title: 'Silver Mist', price: '$50' },
  { id: 4, title: 'Dark Habano', price: '$250' },
  { id: 5, title: 'Menthol Breeze', price: '$65' },
  { id: 6, title: 'Classic White', price: '$35' },
  { id: 7, title: 'Vintage Cohiba', price: '$450' },
  { id: 8, title: 'Limited Edition', price: '$85' },
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setShowDropdown(false);
      setIsMobileMenuOpen(false);
      navigate(`/products?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/products');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handleSelectProduct = (title: string) => {
    setSearchTerm('');
    setShowDropdown(false);
    setIsMobileMenuOpen(false);
    navigate(`/products?q=${encodeURIComponent(title)}`);
  };

  const filteredProducts = mockProducts.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}><h1>PAVONE</h1></Link>
        </div>
        
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div className={`nav-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <form className="search-bar" onSubmit={handleSearch} ref={searchRef}>
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search premium products..." 
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setShowDropdown(true)}
            />
            {showDropdown && searchTerm && (
              <div className="search-dropdown">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(p => (
                    <div 
                      key={p.id} 
                      className="search-item"
                      onClick={() => handleSelectProduct(p.title)}
                    >
                      <span>{p.title}</span>
                      <span className="search-price">{p.price}</span>
                    </div>
                  ))
                ) : (
                  <div className="search-item no-results">No products found</div>
                )}
              </div>
            )}
          </form>

          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link></li>
            <li><a href="/#collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</a></li>
            <li><a href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How it works</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
