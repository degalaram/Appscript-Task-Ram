
import React, { useState } from 'react';
import '../css/orderSummary.css';
import OrderSuccess from './OrderSuccess';

const OrderSummary = ({ cartItems, total, billingInfo, onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const itemsCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const subtotal = total;
  const promotionalSavings = subtotal * 0.2;
  const shipping = 15.00;
  const deliveryCharges = 10.00;
  const tax = (subtotal - promotionalSavings + shipping + deliveryCharges) * 0.05;
  const finalTotal = subtotal - promotionalSavings + shipping + deliveryCharges + tax;

  const handlePlaceOrder = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return <OrderSuccess onClose={onClose} />;
  }

  return (
    <div className="order-summary-modal">
      <div className="order-summary-content">
        <h2>Order Summary</h2>
        
        <div className="summary-details">
          <div className="summary-row">
            <span>Items: {itemsCount}</span>
          </div>
          <div className="summary-row">
            <span>Item Price:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row savings">
            <span>Promotional Savings:</span>
            <span>-${promotionalSavings.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Charges:</span>
            <span>${deliveryCharges.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
        </div>

        <p className="order-question">Do you want to place the order?</p>

        <div className="order-actions">
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place the Order
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
