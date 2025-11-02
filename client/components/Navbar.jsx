
import React, { useState } from 'react';
import '../css/navbar.css';

const Navbar = ({ cartCount = 0, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search triggered:', searchQuery);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="logo">
            <img 
              src="/logo.svg" 
              alt="Shop Logo" 
              className="logo-image"
              data-testid="logo-image"
            />
          </div>

          <form className="search-bar" onSubmit={handleSearch} data-testid="form-search">
            <input
              type="search"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              data-testid="input-search"
              aria-label="Search products"
            />
            <button type="submit" className="search-button" data-testid="button-search" aria-label="Submit search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </form>

          <div className="header-icons">
            <button className="icon-button" data-testid="button-wishlist" aria-label="Wishlist">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button className="icon-button" data-testid="button-cart" aria-label="Shopping cart" onClick={onCartClick}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge" data-testid="text-cart-count">{cartCount}</span>}
            </button>
            <button className="icon-button" data-testid="button-user" aria-label="User account">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            <button 
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              data-testid="button-menu"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#shop" data-testid="link-shop">SHOP</a>
          <a href="#skills" data-testid="link-skills">SKILLS</a>
          <a href="#stories" data-testid="link-stories">STORIES</a>
          <a href="#about" data-testid="link-about">ABOUT</a>
          <a href="#contact" data-testid="link-contact">CONTACT US</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
