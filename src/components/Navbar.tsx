import React from 'react';
import { Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>PAVONE</h1>
        </div>
        
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search premium products..." />
        </div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#collections">Collections</a></li>
          <li><a href="#how-it-works">How it works</a></li>
        </ul>

        <div className="nav-actions">
          {/* Login button removed as per request */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
