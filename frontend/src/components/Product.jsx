import React from "react";

const ProductCard = ({ title, stock, price }) => {
  return (
    <div className=" bg-[#F3F3F3] ">
      <div className="flex items-center p-4 bg-[#F3F3F3] max-md:p-1">
        {/* Gray Box for Image */}
        <div className="w-[75px] h-[80px] bg-[#8C8C8C] rounded"></div>

        <div className="ml-4 max-md:ml-2">
          <h3 className="text-sm font-medium">{title}</h3>
        </div>

        <div className="text-sm font-medium text-gray-500 mx-16 md:mx-32 text-center">
          {stock}
        </div>

        <div className="text-sm font-medium text-gray-500 text-right">
          {price}
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products, title }) => {
  return (
    <div className="relative flex flex-col w-1/2 p-6 bg-[#F3F3F3] rounded-md">
      <span className="bg-white font-dm-sans text-[16px] font-medium leading-[20.83px] text-left mx-11">
        {title}
      </span>
      <div className="p-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            stock={product.stock}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

const ProductsContainer = () => {
  const trendingProducts = [
    { title: "Product name", stock: 95, price: "0.05ETH" },
    { title: "Product name", stock: 955, price: "0.65ETH" },
    { title: "Product name", stock: 110, price: "0.85ETH" },
  ];

  const allProducts = [
    { title: "Product name", stock: 55, price: "0.55ETH" },
    { title: "Product name", stock: 41, price: "0.35ETH" },
    { title: "Product name", stock: 955, price: "0.95ETH" },
  ];

  return (
    <div className="bg-[#F3F3F3]">
      <div className="relative flex justify-between bg-[#F3F3F3] max-w-[1400px] mx-auto max-md:flex-col">
        <ProductList title="Trending" products={trendingProducts} />
        <ProductList title="All Product" products={allProducts} />
      </div>
    </div>
  );
};

export default ProductsContainer;
