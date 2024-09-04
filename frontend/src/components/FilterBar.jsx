import React from "react";
import { FaTh, FaList, FaSearch } from "react-icons/fa";

const FilterBar = ({ setView, view }) => {
  return (
    <div className="mt-4 flex items-center justify-between max-w-4xl mx-auto space-y-4">
      {/* Filter Section */}
      <div className="flex space-x-4">
        <button className="text-gray-700 font-medium">All Items</button>
        <button className="text-gray-700 font-medium">Best Offers</button>
        <button className="text-gray-700 font-medium">null</button>
        <button className="text-gray-700 font-medium">null</button>
      </div>

      {/* Search and Sort Section */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search item"
            className="border border-gray-300 rounded-lg p-2 pl-8 w-48"
          />
          <FaSearch className="absolute left-2 top-2 text-gray-500 h-5 w-5" />
        </div>

        {/* Price Sorting */}
        <div className="relative">
          <select className="border border-gray-300 rounded-lg p-2">
            <option value="low-to-high">Low to high</option>
            <option value="high-to-low">High to low</option>
          </select>
        </div>

        {/* View Toggles */}
        <div className="flex space-x-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 border rounded-lg ${
              view === "grid" ? "bg-gray-200" : "bg-white"
            }`}
          >
            <FaTh className="h-5 w-5" />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 border rounded-lg ${
              view === "list" ? "bg-gray-200" : "bg-white"
            }`}
          >
            <FaList className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
