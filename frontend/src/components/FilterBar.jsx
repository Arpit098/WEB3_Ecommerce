import { FaTh, FaList, FaSearch } from "react-icons/fa";

const FilterBar = ({ setView, view }) => {
  return (
    <div className="mt-4 flex items-center justify-between mx-auto space-y-4 max-w-[1260px]">
      {/* Filter Section */}
      <div className="flex space-x-4 justify-start h-[50px] items-end">
        <button className="text-[#333333] font-bold text-sm">All Items</button>
        <button className="text-[#6A6A6A] font-bold text-sm">Best Offers</button>
        <button className="text-[#6A6A6A] font-bold text-sm">null</button>
        <button className="text-[#6A6A6A] font-bold text-sm">null</button>
      </div>

      {/* Search and Sort Section */}
      <div className="flex items-center space-x-16 ">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search item"
            className="border border-gray-300 rounded-lg p-2 pl-8 w-96 h-full"
          />
          <FaSearch className="absolute left-2 top-0.5 text-gray-300 h-5 w-5 mt-2" />
        </div>

        {/* Price Sorting */}
        <div className="relative flex items-center h-full left-8">
          <p className="text-sm text-[#333333] font-bold mr-2">Price</p>
          <select className="border border-gray-300 rounded-lg p-2 px-3 h-full hover:cursor-pointer">
            <option value="low-to-high">Low to high</option>
            <option value="high-to-low">High to low</option>
          </select>
        </div>

        {/* View Toggles */}
        <div className="flex bg-[#E0E0E0] rounded-lg p-1 h-full space-x-1">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-full bg-white ${
              view === "grid" ? "bg-gray-400" : "bg-[#E0E0E0]"
            }`}
          >
            <FaTh className="h-5 w-5" />
          </button>
          <button
            className={`p-2 rounded-full bg-white ${
              view === "list" ? "bg-gray-400" : "bg-[#E0E0E0]"
            }`}
            onClick={() => setView("list")}
          >
            <FaList className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
