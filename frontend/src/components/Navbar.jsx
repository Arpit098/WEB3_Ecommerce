import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { PiShoppingCart } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import WalletPopup from "./popup";
import { useContract } from "../Context/ContractContext";

export default function Navbar() {
  const { connectWallet, wallet } = useContract();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const connect = async () => {
    await connectWallet();
    console.log(wallet);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <nav className="sticky left-0 top-0 z-50 w-full h-[85px] bg-[#000000] opacity-85 backdrop-blur-3xl flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <div className="text-[#FFFFFF] font-dm-sans font-bold text-[22px] leading-[29px]">
          Lorel Ispum
        </div>

        {/* Search Box - Hidden on small screens */}
        <form className="hidden md:flex items-center w-[300px] lg:w-[400px] h-[46px] rounded-[8px] border border-[#A3A3A3] bg-transparent">
          <input
            type="text"
            placeholder="Search for item"
            className="flex-grow px-4 py-2 text-[#A3A3A3] text-[13px] leading-[17px] font-normal bg-transparent outline-none"
          />
          <button type="submit" className="px-4 text-[#A3A3A3]">
            <CiSearch className="w-[20px] h-[20px]" />
          </button>
        </form>

        {/* Icons and Button */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <AiOutlineHome className="w-6 h-6 md:w-7 md:h-7 text-[#FFFFFF]" />
          <PiShoppingCart className="w-6 h-6 md:w-7 md:h-7 text-[#FFFFFF]" />

          {/* Connect Button - Adjust padding and font size on mobile */}
          <button
            className="flex items-center px-4 md:px-6 py-2 md:py-3 max-md:hidden bg-gradient-to-b from-[#1b1873] to-[#2D3CD9] shadow-[inset_0px_4px_10px_rgba(0,0,0,0.25)] rounded-[24px] text-[#FFFFFF] font-dm-sans font-bold text-[14px] md:text-[16px] leading-[21px]"
            onClick={connect}
          >
            <CiWallet className="w-[18px] md:w-[22px] h-[18px] md:h-[20px] mr-1 md:mr-2" />
            Connect
          </button>

          <TbGridDots className="w-[20px] md:w-[22px] h-[20px] md:h-[22px] text-[#FFFFFF]" />
        </div>
      </nav>

      {/* Popup */}
      {isPopupOpen && <WalletPopup closePopup={closePopup} />}
    </>
  );
}
