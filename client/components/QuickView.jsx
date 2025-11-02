
import React from 'react';
import '../css/quickView.css';

const QuickView = ({ product, onClose, onAddToCart, onBuyNow }) => {
  return (
    <div className="quick-view-overlay" onClick={onClose}>
      <div className="quick-view-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quick-view-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="quick-view-content">
          <div className="quick-view-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="quick-view-details">
            <h2>{product.title}</h2>
            <p className="quick-view-category">{product.category}</p>
            
            <div className="quick-view-rating">
              <span className="rating-stars">★</span>
              <span className="rating-value">{product.rating?.rate || 0}</span>
              <span className="rating-count">({product.rating?.count || 0} reviews)</span>
            </div>

            <div className="quick-view-price">
              <span className="price">${product.price.toFixed(2)}</span>
            </div>

            <div className="quick-view-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="quick-view-actions">
              <button 
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
              <button 
                className="buy-now-btn"
                onClick={() => onBuyNow(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
