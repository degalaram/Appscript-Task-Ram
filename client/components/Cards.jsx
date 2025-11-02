
import React from 'react';
import '../css/cards.css';

const Cards = ({ product, onQuickView }) => {
  return (
    <div className="product-card" data-testid="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
        <button 
          className="wishlist-button"
          aria-label="Add to wishlist"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-title" title={product.title}>
          {product.title}
        </h3>
        <p className="product-category">{product.category}</p>
        
        <div className="product-footer">
          <div className="product-pricing">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <div className="product-rating">
              <span className="rating-stars">★</span>
              <span className="rating-value">{product.rating?.rate || 0}</span>
              <span className="rating-count">({product.rating?.count || 0})</span>
            </div>
          </div>
          
          <button 
            className="quick-view-button"
            onClick={() => onQuickView(product)}
            data-testid="button-quick-view"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
