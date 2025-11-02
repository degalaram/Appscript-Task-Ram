
import React from 'react';
import '../css/flavourFilter.css';

const FlavourFilter = ({ flavours, onFilterChange }) => {
  return (
    <div className="flavour-filter">
      <h3>Flavour</h3>
      {flavours.map((flavour, index) => (
        <label key={index}>
          <input type="checkbox" onChange={(e) => onFilterChange(flavour, e.target.checked)} />
          {flavour}
        </label>
      ))}
    </div>
  );
};

export default FlavourFilter;
