
import React from 'react';
import '../css/orderSuccess.css';

const OrderSuccess = ({ onClose }) => {
  return (
    <div className="order-success-modal">
      <div className="order-success-content">
        <div className="success-icon">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Your order has been confirmed.</p>
        <p className="order-info">You will receive an email confirmation shortly.</p>
        <button className="close-success-btn" onClick={onClose}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
