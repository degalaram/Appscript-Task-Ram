
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Filters from './Filters.jsx';
import ProductGrid from './ProductGrid.jsx';
import Footer from './Footer.jsx';
import QuickView from './QuickView.jsx';
import Cart from './Cart.jsx';
import '../css/App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showFilters, setShowFilters] = useState(window.innerWidth > 768);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load products. Please try again later.');
      setLoading(false);
      console.error('Error fetching products:', err);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const handleFilterChange = ({ categories: selectedCategories, priceRange }) => {
    let filtered = [...products];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    if (priceRange) {
      filtered = filtered.filter(product =>
        product.price >= priceRange.min && product.price <= priceRange.max
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSortChange = (sortBy) => {
    let sorted = [...filteredProducts];

    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sorted.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredProducts(sorted);
  };

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    setQuickViewProduct(null);
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    setShowCart(true);
    setQuickViewProduct(null);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  if (error) {
    return (
      <div className="app-container">
        <Navbar cartCount={cartItems.reduce((count, item) => count + item.quantity, 0)} onCartClick={handleShowCart} />
        <div className="error-container">
          <p>{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar cartCount={cartItems.reduce((count, item) => count + item.quantity, 0)} onCartClick={handleShowCart} />
      
      <main className="main-content">
        <section className="hero-section">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </section>

        <div className="products-header-bar">
          <div className="items-count">
            <span className="count-number">{filteredProducts.length} ITEMS</span>
          </div>
          <div className="filter-toggle-desktop">
            <button className="toggle-filter-btn" onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? '< HIDE FILTER' : 'SHOW FILTER >'}
            </button>
          </div>
          <div className="sort-section-header">
            <select 
              className="sort-select-header"
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="default">RECOMMENDED</option>
              <option value="newest">NEWEST FIRST</option>
              <option value="popular">POPULAR</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
            </select>
          </div>
        </div>

        <div className="content-wrapper">
          {showFilters && (
            <Filters
              categories={categories}
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
            />
          )}
          <div className={`product-section ${!showFilters ? 'full-width' : ''}`}>
            <ProductGrid products={filteredProducts} loading={loading} onQuickView={handleQuickView} />
          </div>
        </div>
      </main>

      <Footer />
      
      {quickViewProduct && (
        <QuickView 
          product={quickViewProduct} 
          onClose={closeQuickView}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      )}

      {showCart && (
        <Cart
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </div>
  );
}

export default App;
