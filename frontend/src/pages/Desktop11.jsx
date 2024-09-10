import React from "react";
import OIP from "../assets/OIP.jpeg";
import OIP1 from "../assets/OIP (1).jpeg";
import OIP2 from "../assets/OIP (2).jpeg";
import Navbar from "../components/Navbar";

const Desktop11 = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#E6F9FF] p-12 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start md:justify-between max-w-7xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-lg">
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
            href="#start-listing"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 md:px-8 rounded-lg hover:bg-blue-700 transition"
          >
            Start Listing
          </a>
        </div>

        {/* Responsive Image Container and Overlapping */}
        <div className="relative w-full max-w-md md:max-w-lg">
          {/* Frame 383 for Image 1 */}
          <div
            className="absolute box-border"
            style={{
              width: "90%", // Responsive width for small screens
              height: "auto",
              left: "0px",
              top: "0px",
              background: "#FFFFFF",
              border: "5px solid #FFFFFF",
              boxShadow: "4px 12px 7px rgba(0, 0, 0, 0.25)",
              borderRadius: "6px",
            }}
          >
            <img
              src={OIP}
              alt="Image 1"
              className="absolute"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          {/* Frame 383 for Image 2 */}
          <div
            className="absolute box-border"
            style={{
              width: "90%", // Responsive width for small screens
              height: "auto",
              left: "10px", // Adjusted for small screens
              top: "30px",
              background: "#FFFFFF",
              border: "5px solid #FFFFFF",
              boxShadow: "4px 12px 7px rgba(0, 0, 0, 0.25)",
              borderRadius: "6px",
            }}
          >
            <img
              src={OIP1}
              alt="Image 2"
              className="absolute"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          {/* Frame 383 for Image 3 */}
          <div
            className="absolute box-border"
            style={{
              width: "90%", // Responsive width for small screens
              height: "auto",
              left: "20px", // Adjusted for small screens
              top: "60px",
              background: "#FFFFFF",
              border: "5px solid #FFFFFF",
              boxShadow: "4px 12px 7px rgba(0, 0, 0, 0.25)",
              borderRadius: "6px",
            }}
          >
            <img
              src={OIP2}
              alt="Image 3"
              className="absolute"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop11;
