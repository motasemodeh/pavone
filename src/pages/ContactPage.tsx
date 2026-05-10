import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will get back to you shortly.');
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-panel">
            <h2>Contact Us</h2>
            <p className="contact-intro">Have a question or need support? Reach out to our Tampa-based team today.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Phone size={24} /></div>
                <div className="info-text">
                  <span>Call Us</span>
                  <strong>(813) 468-6465</strong>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Mail size={24} /></div>
                <div className="info-text">
                  <span>Email Us</span>
                  <strong>sales@pavonedistribution.com</strong>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><MapPin size={24} /></div>
                <div className="info-text">
                  <span>Visit Us</span>
                  <strong>Tampa, FL Warehouse</strong>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Clock size={24} /></div>
                <div className="info-text">
                  <span>Hours</span>
                  <strong>Mon - Fri: 9:00 AM - 5:00 PM</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form className="simple-contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name <span className="required">*</span></label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Email Address <span className="required">*</span></label>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Phone Number <span className="required">*</span></label>
                <input 
                  type="tel" 
                  required 
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Message <span className="required">*</span></label>
                <textarea 
                  rows={6} 
                  required 
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button type="submit" className="btn-primary-large">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
