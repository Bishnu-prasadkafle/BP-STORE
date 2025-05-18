import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages)].map((_, i) => i + 1);

  return (
    <div className='flex justify-center mt-6 gap-2'>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-full text-sm ${
            currentPage === page
              ? "bg-red-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
