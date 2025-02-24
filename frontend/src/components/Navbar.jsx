import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { PiShoppingCart } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import WalletPopup from "./popup";
import PopUpModal from "./popUpModal";
import { useContract } from "../Context/ContractContext";
import CartDialog from "../components/CartDialog"

const placeholders = [
  "Search for item",
  "Search for electronics",
  "Search for fashion",
  "Search for home appliances"
];

export default function Navbar() {
  const { connectWallet, wallet } = useContract();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const connect = async () => {
    await connectWallet();
    setIsPopupOpen(true);
    console.log(wallet);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <nav className="sticky left-0 top-0 z-50 w-full h-[85px] bg-[#000000] opacity-85 backdrop-blur-3xl flex items-center justify-between px-6 md:px-8">
        <div className="text-[#FFFFFF] font-dm-sans font-bold text-[22px] leading-[29px]">
          <Link to="/">Cryptojoy E-Commerce</Link>
        </div>

        <form 
          onSubmit={handleSearchSubmit}
          className="relative hidden md:flex items-center w-[300px] lg:w-[400px] h-[46px] rounded-[8px] border border-[#A3A3A3] bg-transparent"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-[#A3A3A3] text-[13px] leading-[17px] font-normal bg-transparent outline-none"
          />
          
          {!searchQuery && (
            <span
              key={placeholderIndex}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A3A3A3] pointer-events-none"
            >
              {placeholders[placeholderIndex]}
            </span>
          )}
          <button type="submit" className="px-4 text-[#A3A3A3]">
            <CiSearch className="w-[20px] h-[20px]" />
          </button>
        </form>

        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to="/cart">
            <PiShoppingCart className="w-6 h-6 md:w-7 md:h-7 text-[#FFF] hover:scale-110 transition-transform duration-300 hover:cursor-pointer" />
          </Link>
          <button
            onClick={connect}
            className="flex items-center px-4 md:px-6 py-2 md:py-3 max-md:hidden bg-gradient-to-b from-purple-700 to-purple-900 shadow-[inset_0px_4px_10px_rgba(0,0,0,0.25)] rounded-[24px] text-[#FFFFFF] font-dm-sans font-semibold text-[14px] md:text-[16px] leading-[21px]"
          >
            <CiWallet className="w-[18px] md:w-[22px] h-[18px] md:h-[20px] mr-1 md:mr-2" />
            Connect
          </button>
        </div>
      </nav>

      {isPopupOpen && <PopUpModal closePopup={() => setIsPopupOpen(false)} />}
      {isPopupOpen && <WalletPopup closePopup={() => setIsPopupOpen(false)} />}
    </>
  );
}
