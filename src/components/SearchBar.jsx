import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className='bg-white flex items-center rounded-full shadow-lg px-6 py-2 w-full max-w-md hover:ring-2 hover:ring-[#f99c73] transition-all'>
      <Search className='w-5 h-5 text-gray-500 mr-2' />
      <input
        type='text'
        placeholder='shoes perfume bag....'
        className='outline-none h-10 w-90 text-sm font-extralight text-[#274354] placeholder-gray-400'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default SearchBar;
