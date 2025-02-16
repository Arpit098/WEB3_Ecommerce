import React, { useState, useEffect } from "react";
import { FaShoppingBag, FaBusinessTime, FaTimes } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export default function Desktop2() {
  const navigate = useNavigate();
  const [cartPosition, setCartPosition] = useState(-50);
  const [cartOpacity, setCartOpacity] = useState(0);
  const [cartRotation, setCartRotation] = useState(15);
  const [bagRotation, setBagRotation] = useState(-10);

  useEffect(() => {
    const interval = setInterval(() => {
        setCartPosition(0);
        setCartOpacity(1);
        setCartRotation(15);
        setTimeout(() => {
          setCartRotation(0);
          setTimeout(() => {
            setCartRotation(0);
            setTimeout(() => {
              setCartPosition(-100);
              setCartOpacity(0);
            }, 500);
          }, 500);
        }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bagInterval = setInterval(() => {
      setBagRotation((prev) => (prev === -10 ? 10 : -10));
    }, 500);
    return () => clearInterval(bagInterval);
  }, []);

  const handleAccountTypeSelection = (type) => {
    if (type === "shopping") {
      navigate("/desktop12");
    } else if (type === "business") {
      navigate("/desktop11");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-[480px] h-[414px] max-md:w-5/6 bg-white shadow-[10px_10px_30px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(0,0,0,0.1)] rounded-2xl p-10">
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center top-2 right-3 absolute shadow-xl">
          <FaTimes className="text-black text-3xl" />
        </button>
        <div className="flex flex-col items-center">
          {/* Logo Container */}
          <div className="flex flex-col items-center mb-10">
            <div
              className="flex items-center justify-center w-16 h-16 bg-[#484F98] rounded-full shadow-inner mb-4"
            >
              <FaShoppingBag className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-semibold">Welcome</h2>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <h4 className="text-xl text-[#7A7A7A] tracking-wider font-semibold">
              Select account type
            </h4>

            {/* Buttons */}
            <button
              onClick={() => handleAccountTypeSelection("shopping")}
              className="py-3 border border-indigo-800 rounded-lg flex items-center justify-center space-x-3 hover:bg-indigo-50 md:w-96 md:h-12 max-md:w-[70vw] min-w-min"
            >
              <span
                style={{
                  transform: `translateX(${cartPosition}px) rotate(${cartRotation}deg)`,
                  opacity: cartOpacity,
                  transition: "transform 0.2s ease-in, opacity 0.3s ease-in-out",
                }}
              >
                <TiShoppingCart className="text-[#1A237E] text-2xl md:text-3xl" />
              </span>
              <span className="text-indigo-800 text-lg font-medium">
                For Shopping
              </span>
            </button>

            <button
              onClick={() => handleAccountTypeSelection("business")}
              className="w-full py-3 bg-gradient-to-r from-[#1A237E] to-[#2F3FE4] rounded-lg flex items-center justify-center space-x-3 text-white"
            >
              {/* Business Icon */}
              <FaBusinessTime style={{ transform: `rotate(${bagRotation}deg)`, transition: "transform 0.5s ease-in-out" }} className="text-white text-xl md:text-3xl" />
              <span className="text-lg font-medium">For Business</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
