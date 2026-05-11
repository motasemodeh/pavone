
import { Link } from 'react-router-dom';
import { Share2, Mail, Info, Globe } from 'lucide-react';
import logoImg from '../assets/pavone-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col brand-col">
            <img src={logoImg} alt="Pavone Distribution" className="footer-logo-img" />
            <p>Tampa's Trusted Wholesale Distribution Partner. Stock Smarter. Sell Faster. Grow Bigger.</p>
            <div className="footer-contact-info">
              <strong>Phone:</strong> (813) 468-6465
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Marketplace</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/become-a-customer">Become a Customer</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Suggestions</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
          
          <div className="footer-col newsletter-col">
            <h4>Newsletter</h4>
            <p>Signup for our newsletter to get the latest news in your inbox.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="enter your email" />
              <button>→</button>
            </div>
            <p className="small-text">Your email is safe with us. We don't spam.</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© Copyright 2026 - Pavone by Designesia</p>
          <div className="social-links">
            <Share2 size={18} />
            <Globe size={18} />
            <Mail size={18} />
            <Info size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
