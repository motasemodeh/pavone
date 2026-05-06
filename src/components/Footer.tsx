
import { Share2, Mail, Info, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col brand-col">
            <h2 className="footer-logo">PAVONE</h2>
            <p>The world's leading marketplace for premium cigarette and cigar products. Discover authentic items from top vendors.</p>
          </div>
          
          <div className="footer-col">
            <h4>Marketplace</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#products">New Arrival</a></li>
              <li><a href="#products">Most Popular</a></li>
              <li><a href="#vendors">Top Vendors</a></li>
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
