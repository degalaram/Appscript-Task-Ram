
import React, { useState } from 'react';
import '../css/billing.css';
import OrderSummary from './OrderSummary.jsx';

const BillingAddress = ({ cartItems, total, onBack, onClose }) => {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
    
    if (!allFieldsFilled) {
      alert('Please fill in all required fields');
      return;
    }

    setShowOrderSummary(true);
  };

  if (showOrderSummary) {
    return <OrderSummary cartItems={cartItems} total={total} billingInfo={formData} onClose={onClose} />;
  }

  return (
    <div className="billing-modal">
      <div className="billing-content">
        <div className="billing-header">
          <button className="back-btn" onClick={onBack}>← Back to Cart</button>
          <h2>Billing Address</h2>
          <button className="billing-close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="billing-form">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BillingAddress;
