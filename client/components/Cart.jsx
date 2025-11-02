
import React, { useState } from 'react';
import '../css/cart.css';
import BillingAddress from './BillingAddress';

const Cart = ({ cartItems, onClose, onUpdateQuantity, onRemoveItem }) => {
  const [showBilling, setShowBilling] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }
    setShowBilling(true);
  };

  if (showBilling) {
    return <BillingAddress cartItems={cartItems} total={calculateTotal()} onBack={() => setShowBilling(false)} onClose={onClose} />;
  }

  return (
    <div className="cart-modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cart-content">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <p className="cart-item-category">{item.category}</p>
                    <div className="cart-item-price">${item.price.toFixed(2)}</div>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))} aria-label="Decrease quantity">-</button>
                      <input type="number" value={item.quantity} readOnly min="1" />
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">+</button>
                    </div>
                    <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>
                    <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <h3>Total Price of your Cart</h3>
              <h2>${calculateTotal().toFixed(2)}</h2>
            </div>
            <button className="checkout-btn" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
