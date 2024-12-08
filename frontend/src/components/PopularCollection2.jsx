import React from "react";
import { Link } from "react-router-dom";
import products from "./ProdctDetailsData";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const PopularCollection2 = () => {
  return (
    <div className="mx-auto p-4 relative overflow-hidden max-w-[1400px]">
      <h2 className="text-3xl font-bold mb-4 leading-[36.46px] text-left md:px-14">
        Popular Collection
      </h2>
      <div className="flex items-center justify-between px-3 mx-auto flex-wrap">
        {/* Left arrow button */}
        <button className="text-[#000] text-3xl hidden lg:block">
          <FaCircleArrowLeft />
        </button>

        {/* Cards container */}
        <div className="flex md:w-[95%] justify-evenly gap-6 flex-wrap">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-blue-200 rounded-lg p-2 text-center md:w-[226px] w-full h-[286px]"
            >
              <Link to={`/product-details/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500">Qty: {product.qty}</p>
                <p className="text-gray-500">Price: {product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Right arrow button */}
        <button className="text-[#000] text-3xl hidden lg:block">
          <FaCircleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PopularCollection2;
