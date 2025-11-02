
import React, { useState } from 'react';
import '../css/filters.css';

const Filters = ({ categories, onFilterChange, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('default');

  const handleCategoryChange = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(updated);
    onFilterChange({ categories: updated, priceRange });
    console.log('Category filter changed:', updated);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    onSortChange(value);
    console.log('Sort changed:', value);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 1000 });
    setSortBy('default');
    onFilterChange({ categories: [], priceRange: { min: 0, max: 1000 } });
    onSortChange('default');
    console.log('Filters cleared');
  };

  return (
    <>
      <button 
        className="filter-toggle-mobile"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-filter-toggle"
        aria-label="Toggle filters"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
        FILTERS
      </button>

      <aside className={`filters-sidebar ${isOpen ? 'open' : ''}`} data-testid="sidebar-filters">
        <div className="filters-header">
          <h2>Filters</h2>
          <button 
            className="close-button"
            onClick={() => setIsOpen(false)}
            data-testid="button-close-filters"
            aria-label="Close filters"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="filter-group">
          <h3>Sort By</h3>
          <select 
            value={sortBy}
            onChange={handleSortChange}
            className="sort-select"
            data-testid="select-sort"
          >
            <option value="default">RECOMMENDED</option>
            <option value="price-low">PRICE: LOW TO HIGH</option>
            <option value="price-high">PRICE: HIGH TO LOW</option>
            <option value="newest">NEWEST FIRST</option>
          </select>
        </div>

        <div className="filter-group">
          <h3>Category</h3>
          <div className="checkbox-group">
            {categories.map(category => (
              <label key={category} className="checkbox-label" data-testid={`checkbox-category-${category}`}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <span>{category.toUpperCase()}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3>Price Range</h3>
          <div className="price-inputs">
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
              className="price-input"
              data-testid="input-price-min"
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
              className="price-input"
              data-testid="input-price-max"
            />
          </div>
        </div>

        <button 
          className="clear-button"
          onClick={clearFilters}
          data-testid="button-clear-filters"
        >
          Clear All Filters
        </button>
      </aside>

      {isOpen && <div className="filters-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Filters;
