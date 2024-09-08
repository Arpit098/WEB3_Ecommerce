import React, {useState} from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { PiShoppingCart } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import WalletPopup from "./popup";
import { useContract } from "../Context/ContractContext";
export default function Navbar() {

  const {connectWallet, wallet} = useContract();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const connect = async() =>{
    await connectWallet();
    console.log(wallet)
  }

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <nav className="sticky left-0 top-0 z-50 w-full h-[80px] bg-[#000000] opacity-90 backdrop-blur-3xl max-md:w-screen flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-[#FFFFFF] font-dm-sans font-bold text-[22px] leading-[29px]">
          Lorel Ispum
        </div>

        {/* Search Box */}
        <form className="flex items-center w-[400px] h-[46px] rounded-[8px] border border-[#A3A3A3] bg-transparent">
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
        <div className="flex items-center space-x-6">
          <AiOutlineHome className="w-[23.48px] h-[21.44px] text-[#FFFFFF]" />
          <PiShoppingCart className="w-[22.04px] h-[20.13px] text-[#FFFFFF]" />

          <button
            className="flex items-center px-6 py-2 bg-gradient-to-b from-[#182073] to-[#2D3CD9] shadow-[inset_0px_4px_10px_rgba(0,0,0,0.25)] rounded-[24px] text-[#FFFFFF] font-dm-sans font-bold text-[16px] leading-[21px]"
            onClick={connect}
          >
            <CiWallet className="w-[22px] h-[20px] mr-2" />
            Connect
          </button>

          <TbGridDots className="w-[22px] h-[22px] text-[#FFFFFF]" />
        </div>
      </nav>
      {isPopupOpen && <WalletPopup closePopup={closePopup} />}
    </>
  );
}
