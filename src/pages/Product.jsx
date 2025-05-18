import { useState } from "react";
import { products } from "../data/Products";
import ProductCard from "../components/Product/ProductCard";
import Sidebar from "../components/Product/Sidebar";
import SortDropdown from "../components/Product/SortDropdown";
import Pagination from "../components/Product/Pagination";

const PRODUCTS_PER_PAGE = 6;

function Product() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter
  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price_low") return a.price - b.price;
    if (sortBy === "price_high") return b.price - a.price;
    return new Date(b.createdAt) - new Date(a.createdAt); // newest
  });

  // Pagination
  const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE);
  const paginated = sorted.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8'>
      <h1 className='text-3xl font-bold mb-6 text-center'>All Products</h1>
      <div className='flex flex-col md:flex-row gap-6'>
        <Sidebar selected={category} onSelect={setCategory} />

        <div className='flex-1'>
          <div className='flex justify-end mb-4'>
            <SortDropdown selected={sortBy} onChange={setSortBy} />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {paginated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
