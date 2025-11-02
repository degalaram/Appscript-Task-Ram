
import React from 'react';
import Cards from './Cards';
import '../css/productGrid.css';

const ProductGrid = ({ products, loading, onQuickView }) => {
  if (loading) {
    return (
      <div className="product-grid-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="product-grid-container">
        <div className="empty-state">
          <p>No products found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-grid-container">
      <div className="products-header">
        <h2>{products.length} ITEMS</h2>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <Cards 
            key={product.id} 
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
