import React from "react";

const SortDropdown = ({ selected, onChange }) => {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className='border px-4 py-2 rounded-md'>
      <option value='newest'>Sort by: Newest</option>
      <option value='price_low'>Price: Low to High</option>
      <option value='price_high'>Price: High to Low</option>
    </select>
  );
};

export default SortDropdown;
