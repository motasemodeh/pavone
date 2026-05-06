import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './QuotePage.css';

const QuotePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product || { title: 'General Inquiry' };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I am interested in ${product.title}. Please provide more information.`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    navigate('/');
  };

  return (
    <div className="quote-page">
      <div className="container">
        <div className="quote-form-container">
          <div className="quote-header">
            <h2>Get a Quote</h2>
            <p>Fill out the form below and we'll connect you with the vendor.</p>
          </div>
          
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product of Interest</label>
              <input type="text" value={product.title} readOnly />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows={5} 
                placeholder="Your message..." 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button type="submit" className="btn-primary">Send Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
