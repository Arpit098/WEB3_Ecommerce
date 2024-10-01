import React from "react";
import { FaEthereum } from "react-icons/fa";

const SummaryBar = () => {
  return (
    <div className="bg-[#E8E9F2] p-4 rounded-lg flex items-center justify-between shadow-sm mx-auto max-w-7xl md:mt-10">
      <div className="text-sm flex flex-wrap gap-4 max-md:flex-col">
        <span className="text-sm">
          Items <strong className="text-[#333333]">10,000</strong>
        </span>
        |
        <span>
          Date created <strong className="text-[#333333]">May, 2024</strong>
        </span>
        |
        <span>
          Creator earnings <strong className="text-[#333333]">6.95%</strong>
        </span>
        |
        <span className="flex items-center">
          Chain type <FaEthereum className="ml-1" />
        </span>
      </div>
    </div>
  );
};

export default SummaryBar;
