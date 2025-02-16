import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "./ProdctDetailsData";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const PopularCollection2 = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages - 1 ? prevPage + 1 : 0));
  };

  const startIndex = currentPage * productsPerPage;
  const selectedProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="mx-auto p-4 relative overflow-hidden max-w-[1400px]">
      <h2 className="text-3xl font-bold mb-4 leading-[36.46px] text-left md:px-14">
        Popular Collection
      </h2>
      <div className="flex items-center justify-between px-3 mx-auto">
        {/* Left arrow button */}
        <button onClick={handlePrevPage} className="text-[#000] text-3xl hidden lg:block">
          <FaCircleArrowLeft />
        </button>

        {/* Cards container */}
        <div className="flex md:w-[95%] justify-evenly gap-6 overflow-hidden transition-transform duration-500 ease-in-out">
          {selectedProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-2 text-center md:w-[226px] w-[226px] h-[286px] flex-shrink-0 shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <Link to={`/product-details/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-4 shadow-md"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500">Qty: {product.qty}</p>
                <p className="text-gray-500">Price: {product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Right arrow button */}
        <button onClick={handleNextPage} className="text-[#000] text-3xl hidden lg:block">
          <FaCircleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PopularCollection2;
