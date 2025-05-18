import React from "react";
const categories = ["All", "Bags", "Shoes", "Clothing", "Perfume"];

const Sidebar = ({ selected, onSelect }) => {
  return (
    <aside className='bg-white rounded-2xl shadow-md p-4 w-full md:w-48'>
      <h3 className='font-bold mb-4 text-center'>Categories</h3>
      <ul className='space-y-2'>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelect(cat)}
            className={`cursor-pointer text-center px-3 py-2 rounded-full transition ${
              selected === cat ? "bg-red-500 text-white" : "hover:bg-gray-100"
            }`}>
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
