
import React from 'react';
import '../css/discountFilter.css';

const DiscountFilter = ({ onFilterChange }) => {
  return (
    <div className="discount-filter">
      <h3>Discount Range</h3>
      <label>
        <input type="checkbox" onChange={(e) => onFilterChange('10%', e.target.checked)} />
        10% and above
      </label>
      <label>
        <input type="checkbox" onChange={(e) => onFilterChange('20%', e.target.checked)} />
        20% and above
      </label>
    </div>
  );
};

export default DiscountFilter;
