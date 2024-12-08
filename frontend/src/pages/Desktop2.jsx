import React from "react";
import { FaShoppingBag, FaBusinessTime, FaTimes } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export default function Desktop2() {
  const navigate = useNavigate();

  const handleAccountTypeSelection = (type) => {
    if (type === "shopping") {
      navigate("/desktop12");
    } else if (type === "business") {
      navigate("/desktop11");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-[480px] h-[414px] max-md:w-5/6 bg-white shadow-md rounded-lg p-10">
        <button className="w-10 h-10 bg-white shadow-slate-500 shadow-lg rounded-full flex items-center justify-center top-2 right-3 absolute">
          <FaTimes className="text-black text-xl" />
        </button>
        <div className="flex flex-col items-center">
          {/* Logo Container */}
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-700 rounded-full shadow-inner mb-4">
              {/* Bag Icon */}
              <FaShoppingBag className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-semibold">Welcome</h2>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <h4 className="text-xl text-[#7A7A7A] tracking-wider">
              Select account type
            </h4>

            {/* Buttons */}
            <button
              onClick={() => handleAccountTypeSelection("shopping")}
              className=" py-3 border border-indigo-800 rounded-lg flex items-center justify-center space-x-3 hover:bg-indigo-50 md:w-96 md:h-12 max-md:w-[70vw] min-w-min"
            >
              {/* Shopping Icon */}
              <TiShoppingCart className="text-[#1A237E] text-2xl md:text-3xl  transition-transform duration-200  " />
              <span className="text-indigo-800 text-lg font-medium">
                For Shopping
              </span>
            </button>

            <button
              onClick={() => handleAccountTypeSelection("business")}
              className="w-full py-3 bg-gradient-to-r from-[#1A237E] to-[#2F3FE4] rounded-lg flex items-center justify-center space-x-3 text-white"
            >
              {/* Business Icon */}
              <FaBusinessTime className="text-white text-xl md:text-3xl" />
              <span className="text-lg font-medium">For Business</span>
            </button>
          </div>

          {/* Close button */}
          {/* <button className="absolute top-4 right-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center">
            <FaTimes className="text-black text-xl" />
          </button> */}
        </div>
      </div>
    </div>
  );
}
