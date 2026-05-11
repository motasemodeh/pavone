
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, Mail, Info, Globe, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/pavone-logo.png';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('/send-email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, subject: 'New Newsletter Subscription' })
        });

        if (response.ok) {
          setSubmitted(true);
          setEmail('');
          setTimeout(() => setSubmitted(false), 5000);
        }
      } catch (error) {
        console.error('Newsletter error:', error);
      }
    }
  };

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
          
          <div className="footer-col newsletter-col">
            <h4>Newsletter</h4>
            <p>Signup for our newsletter to get the latest news in your inbox.</p>
            
            {submitted ? (
              <div className="newsletter-success">
                <CheckCircle2 size={20} color="#10b981" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="enter your email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">→</button>
              </form>
            )}
            
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
