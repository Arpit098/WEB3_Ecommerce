import React, { useState, useEffect } from "react";
import truck from "../assets/truck.gif"

const PAGE_SIZE = 6;

const ProductCard = ({ title, stock, price }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="w-[75px] h-[80px] bg-[#8C8C8C] rounded mb-2"></div>
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-sm font-medium text-gray-500">Stock: {stock}</p>
      <p className="text-sm font-medium text-gray-500">{price}</p>
    </div>
  );
};

const ProductList = ({ products, title }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [pageIndex, setPageIndex] = useState(0);

  // Filter products based on search query and price filter
  const filteredProducts = products.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const priceValue = parseFloat(product.price);
    let priceMatch = true;
    if (priceFilter === "under") {
      priceMatch = priceValue < 1;
    } else if (priceFilter === "above") {
      priceMatch = priceValue >= 1;
    }
    return titleMatch && priceMatch;
  });

  // Reset page index on filter change
  useEffect(() => {
    setPageIndex(0);
  }, [searchQuery, priceFilter]);

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);

  useEffect(() => {
    if (totalPages > 1) {
      const interval = setInterval(() => {
        setPageIndex((prev) => (prev + 1) % totalPages);
      }, 3000); // 3 seconds per page
      return () => clearInterval(interval);
    }
  }, [totalPages]);

  const startIndex = pageIndex * PAGE_SIZE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="bg-[#F3F3F3] p-6 rounded-md">
      <h2 className="text-2xl font-medium mb-4">{title} <span className="text-sm text-gray-500 font-normal">Delivery Free for 1 month <img src={truck} alt="Delivery Truck" className="w-8 h-8 -translate-y-1 inline-block mr-2"/></span></h2>
      {/* Search and Filter Controls */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All Prices</option>
          <option value="under">Under 1 ETH</option>
          <option value="above">1 ETH & Above</option>
        </select>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              stock={product.stock}
              price={product.price}
            />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

const ProductsContainer = () => {
  const allProducts = [
    { title: "Product name", stock: 55, price: "0.55 DOGE" },
    { title: "Product name", stock: 41, price: "0.35 DOGE" },
    { title: "Product name", stock: 955, price: "0.95 DOGE" },
    { title: "Product name", stock: 101, price: "1.05 DOGE" },
    { title: "Product name", stock: 202, price: "1.15 DOGE" },
    { title: "Product name", stock: 303, price: "1.25 DOGE" },
    { title: "Product name", stock: 404, price: "1.35 DOGE" },
  ];

  return (
    <div className="bg-[#F3F3F3] max-w-[1400px] mx-auto p-6">
      <ProductList title="All Products" products={allProducts} />
    </div>
  );
};

export default ProductsContainer;