import React, { useState, useRef } from "react";
import mirrorImage from "../assets/pc3.png";
import { FaArrowLeft } from "react-icons/fa6";

const Desktop9 = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileURL = URL.createObjectURL(selectedFile);
    setFile(fileURL);
  };

  const handleClearFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <>
      <div className="flex max-md:flex-col">
        <div className="bg-white md:w-1/2 flex items-center justify-center min-h-screen relative z-10">
          <div
            className="absolute inset-0 bg-auto bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${mirrorImage})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-65"></div>
          <div className="md:w-[80%] w-[90%] md:mt-4 mt-7">
            <br />
            <h2 className="text-white relative z-10 text-2xl font-bold tracking-wide">
              Welcome to the Web3.0 Ecommerce Business
            </h2>
            <p className="text-white relative z-10 mb-3 mt-2">
              Here You can list any products with <span className="italic">0.01 ETH</span> each
            </p>
            <div className="p-8 !bg-white z-50 relative rounded-lg !h-full mb-3">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="border border-gray-300 p-2 rounded-md focus:outline-none"
                    ref={fileInputRef}
                    style={{ appearance: 'none', MozAppearance: 'none' }}
                  />
                  {file && (
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm("Do you really want to remove the current image?")) {
                          handleClearFile();
                        }
                      }}
                      className="mt-2 bg-gray-200 text-white p-2 rounded-md hover:bg-gray-500 transition"
                    >
                      <span className="font-bold">&#x2715;</span> Remove
                    </button>
                  )}
                </div>
                <p className="md:-mb-3">Title</p>
                <input
                  type="text"
                  placeholder="Title"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none"
                  style={{ appearance: 'none', MozAppearance: 'none', WebkitAppearance: 'none' }}
                />
                <p className="md:-mb-3">Description</p>
                <textarea
                  placeholder="Description"
                  rows="4"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none"
                  style={{ appearance: 'none', MozAppearance: 'none', WebkitAppearance: 'none' }}
                />

                <p className="md:-mb-3">Stocks</p>
                <input
                  type="number"
                  placeholder="Stocks"
                  min="0"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none"
                  style={{ appearance: 'none', MozAppearance: 'none' }}
                />

                <p className="md:-mb-3">Prices</p>
                <input
                  type="number"
                  placeholder="Prices"
                  min="0"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none"
                  style={{ appearance: 'none', MozAppearance: 'none' }}
                />

                <button className="bg-blue-600 text-white font-semibold py-3 rounded-3xl hover:bg-blue-700 transition">
                  List Product
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Section: Image Preview */}
        <div className="md:w-1/2 flex justify-center items-center border-gray-400 min-h-screen w-full">
          <div className="flex justify-center items-center border-2 border-dashed border-gray-400 rounded-lg p-6">
            {file ? (
              <img
                src={file}
                alt="Preview"
                className="max-w-full w-[80%] h-[70%] max-h-full object-cover mx-auto"
              />
            ) : (
              <div className="text-gray-500">
                Uploaded image will display here
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop9;
