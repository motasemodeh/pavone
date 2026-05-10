import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BecomeCustomerPage.css';

const BecomeCustomerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product || { title: 'General Inquiry' };

  const [formData, setFormData] = useState({
    reason: 'New Wholesale Account',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    address: '',
    state: '',
    zipCode: '',
    message: product.title !== 'General Inquiry' ? `I am interested in ${product.title} for my shop.` : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for applying! Our team will review your wholesale account application and contact you soon.');
    navigate('/');
  };

  return (
    <div className="quote-page become-customer-page">
      <div className="container">
        <div className="quote-form-container">
          <div className="quote-header">
            <h2>Become a Wholesale Customer</h2>
            <p>Ready to grow your business? Fill out the application below to open your Pavone Distribution account.</p>
            <div className="special-badge">Get $100 OFF your first order after approval!</div>
          </div>
          
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Reason for contact <span className="required">*</span></label>
              <select 
                required 
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              >
                <option value="New Wholesale Account">Open New Wholesale Account</option>
                <option value="Existing Account Support">Existing Account Support</option>
                <option value="Product Inquiry">Bulk Product Inquiry</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>First Name <span className="required">*</span></label>
                <input 
                  type="text" 
                  required 
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Last Name <span className="required">*</span></label>
                <input 
                  type="text" 
                  required 
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Phone <span className="required">*</span></label>
              <input 
                type="tel" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Business / Organization Name: <span className="required">*</span></label>
              <input 
                type="text" 
                required
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Store / Business Street Address & City</label>
              <input 
                type="text" 
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
              <p className="form-help">
                If you are a prospective customer, the more information we have on your location, the faster we can work together.
              </p>
            </div>

            <div className="form-group">
              <label>Business/Organization State: <span className="required">*</span></label>
              <select 
                required 
                value={formData.state}
                onChange={(e) => setFormData({...formData, state: e.target.value})}
              >
                <option value="">Please select...</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Alabama">Alabama</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Store/Business/Organization Zip Code: <span className="required">*</span></label>
              <input 
                type="text" 
                required 
                value={formData.zipCode}
                onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>How can we help?: <span className="required">*</span></label>
              <textarea 
                rows={5} 
                required 
                placeholder="Tell us about your business or specific products you need..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button type="submit" className="btn-primary">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeCustomerPage;
