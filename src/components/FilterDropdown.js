// FilterDropdown.js
import React from 'react';

function FilterDropdown({ label, options, selectedValue, onChange }) {
  return (
    <select
      className="p-2 border border-gray-900 bg-slate-900 text-white rounded"
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{`Select ${label}`}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default FilterDropdown;
