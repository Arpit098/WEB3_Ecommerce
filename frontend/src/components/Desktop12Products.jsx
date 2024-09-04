import React from "react";
import products from "./D12Data";

const Desktop12Products = ({ view }) => {
  return (
    <div className="mx-auto p-4 relative overflow-hidden ml-20 mr-20">
      {/* Product Display Area */}
      <div
        className={`${
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            : "flex flex-col space-y-4"
        }`}
      >
        {products.map((product) => (
          <div
            key={product.id} // Ensure each ID is unique
            className={`border border-[#F7F7F5] rounded-lg p-4 ${
              view === "grid"
                ? "w-full h-auto text-center"
                : "w-full h-auto flex items-center"
            }`}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className={`${
                view === "grid"
                  ? "w-full h-44 object-cover rounded-lg mb-4"
                  : "w-24 h-24 object-cover rounded-lg mr-4"
              }`}
            />
            {/* Product Info */}
            <div className={`${view === "list" ? "text-left" : ""}`}>
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-[#434343] mb-1">Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktop12Products;
