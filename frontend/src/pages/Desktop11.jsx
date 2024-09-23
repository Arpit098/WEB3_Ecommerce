import React from "react";
import OIP from "../assets/OIP.jpeg"; // Image 1
import OIP1 from "../assets/OIP (1).jpeg"; // Image 2
import OIP2 from "../assets/OIP (2).jpeg"; // Image 3
import Navbar from "../components/Navbar";

const Desktop11 = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#E6F9FF] p-12 rounded-lg shadow-md flex justify-between md:items-start md:justify-between w-full max-w-7xl mx-auto space-y-8 md:space-y-0 md:space-x-8 min-h-screen">
        {/* Text Section */}
        <div className="text-left md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Welcome to <br />
            Lorem Ipsum Web3 <br />
            E-commerce Business
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            We’re thrilled to have you on board. <br />
            Your journey to reaching millions of customers starts here.
          </p>
          <a
            href="start-listing"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 md:px-8 rounded-lg hover:bg-blue-700 transition"
          >
            Start Listing
          </a>
        </div>

        {/* Grid for overlapping images */}
        <div className="grid grid-cols-1 grid-rows-1 relative w-full max-w-md md:max-w-lg h-auto">
          {/* Image 1 */}
          <div className=" row-start-1 col-start-1 z-30 transform translate-x-10 translate-y-8">
            <img
              src={OIP}
              alt="Image 1"
              className="w-[316.55px] h-[316.55px] rounded-lg shadow-lg"
            />
          </div>

          {/* Image 2 */}
          <div className="row-start-1 col-start-1 z-20 transform -translate-x-40 translate-y-64">
            <img
              src={OIP1}
              alt="Image 2"
              className="w-[258.55px] h-[258.55px] rounded-lg shadow-lg"
            />
          </div>

          {/* Image 3 */}
          <div className="row-start-1 col-start-1 z-10 transform translate-x-40 translate-y-72">
            <img
              src={OIP2}
              alt="Image 3"
              className="w-[258.55px] h-[258.55px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop11;
