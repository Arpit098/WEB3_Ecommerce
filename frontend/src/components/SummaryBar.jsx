import React from "react";
import { FaEthereum } from "react-icons/fa";

const SummaryBar = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between shadow-sm mx-auto max-w-7xl">
      <div className="text-sm flex flex-wrap gap-4">
        <span>
          Items <strong>10,000</strong>
        </span>
        <span>
          Date created <strong>May, 2024</strong>
        </span>
        <span>
          Creator earnings <strong>6.95%</strong>
        </span>
        <span className="flex items-center">
          Chain type <FaEthereum className="ml-1" />
        </span>
      </div>
    </div>
  );
};

export default SummaryBar;
