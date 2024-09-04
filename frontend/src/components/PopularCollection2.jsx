import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "./ProdctDetailsData";

const PopularCollection2 = () => {

  return (
    <div className=" mx-auto p-4 relative overflow-hidden">
      <h2 className="text-3xl font-bold mb-4 leading-[36.46px] text-left">
        Popular Collection
      </h2>
      <div className="flex items-center">
        <div className="flex justify-around gap-6 flex-wrap ">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-blue-200 rounded-lg p-2 text-center w-[226px] h-[286px] "
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
        </div>
    </div>
  );
};

export default PopularCollection2;

