import React from "react";
import OIP from "../assets/OIP.png";
import OIP1 from "../assets/OIP (1).png";
import OIP2 from "../assets/OIP (2).png";
import Navbar from "../components/Navbar";

const Desktop11 = () => {
  return (
    <div className="min-h-screen bg-[#E6F9FF]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 relative">
        {/* Background Circle */}
        <div className="absolute left-0 top-20 w-[500px] h-[500px] bg-white/50 rounded-full blur-xl"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Left Column - Text Content */}
          <div className="z-10 pt-8">
            <h1 className="text-[#1A236A] text-5xl font-semibold leading-tight mb-4">
              Welcome to
              <br />
              <span className="text-[#1A236A]">Lorem Ipsum Web3</span>
              <br />
              E-commerce Business
            </h1>

            <div className="space-y-2 mb-6">
              <p className="text-gray-600 text-sm">
                We&apos;re thrilled to have you on board.
              </p>
              <p className="text-gray-600 text-sm">
                Your journey to reaching millions of customers starts here.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-[#1A237E] text-xl font-medium">
                Get Started by Listing Your Products
              </h2>
            </div>

            <button className="flex items-center px-4 md:px-6 py-2 md:py-3 max-md:hidden bg-gradient-to-b from-[#1b1873] to-[#2D3CD9] shadow-[inset_0px_4px_10px_rgba(0,0,0,0.25)] rounded-[24px] text-[#FFFFFF] font-dm-sans font-medium text-[14px] md:text-[16px] leading-[21px]">
              <a
                href="start-listing"
              >
                Start Listing
              </a>
            </button>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Stacked Images with Polaroid Effect */}
            <div className="absolute top-10 -translate-x-20 right-0 w-[240px] transform z-30">
              <div className="bg-white p-1 shadow-xl">
                <img src={OIP} alt="Character" className="w-full h-auto" />
              </div>
            </div>

            <div className="absolute top-40 -translate-x-4 w-[240px] transform z-20">
              <div className="bg-white p-1 shadow-xl">
                <img src={OIP1} alt="Monkey" className="w-full h-auto" />
              </div>
            </div>

            <div className="absolute top-40 translate-y-10 right-0 w-[240px] transform z-10">
              <div className="bg-white p-1 shadow-2xl">
                <img
                  src={OIP2}
                  alt="Character 2"
                  className="w-[480px] h-[240px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop11;
