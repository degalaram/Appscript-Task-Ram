
import React from 'react';
import '../css/chipsFilter.css';

const ChipsFilter = ({ filters, onRemove }) => {
  return (
    <div className="chips-filter">
      {filters.map((filter, index) => (
        <div key={index} className="chip">
          <span>{filter}</span>
          <button onClick={() => onRemove(filter)}>×</button>
        </div>
      ))}
    </div>
  );
};

export default ChipsFilter;
