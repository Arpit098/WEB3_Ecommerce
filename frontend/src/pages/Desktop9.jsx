import React, { useState, useRef, } from "react";
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
            <div className="bg-white p-4 rounded-full relative z-10 w-4 h-4 grid place-content-center">
              <a href="/desktop11">
                <FaArrowLeft />
              </a>
            </div>
            <br />
            <h2 className="text-white relative z-10 text-2xl font-bold tracking-wide">
              Welcome to the Web3.0 Ecommerce Business
            </h2>
            <p className="text-white relative z-10 mb-3 mt-2">
              Here You can list any products with 0.01 eth each
            </p>
            <div className="p-8 !bg-white z-50 relative rounded-lg !h-full mb-3">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="border-2 font-semibold border-gray-300 rounded-md focus:outline-none file-input"
                    ref={fileInputRef}
                  />
                  <style>
                    {`
                      input[type="file"]::file-selector-button {
                        background: #484F98;
                        color: white;
                        padding: 8px 16px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-style: normal;
                        font-weight: 500;
                      }
                      input[type="file"] {
                        font-style: italic;
                        font-weight: 300;
                        color: gray;
                      }
                    `}
                  </style>
                  {file && (
                    <button
                      type="button"
                      onClick={handleClearFile}
                      className="mt-2 bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500 transition"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <p className="md:-mb-3">Title</p>
                <input
                  type="text"
                  placeholder="Title"
                  className="p-2 border-2 border-gray-300 rounded-md focus:outline-none"
                  required
                />
                <p className="md:-mb-3">Description</p>
                <textarea
                  rows="4"
                  className="p-2 border-2 border-gray-400 bg-gray-200 rounded-md focus:outline-none"
                />

                <p className="md:-mb-3">Stocks</p>
                <input
                  type="number"
                  min="0"
                  placeholder="Stocks"
                  className="p-2 border-2 border-gray-300 rounded-md focus:outline-none"
                  required
                />

                <p className="md:-mb-3">Prices</p>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Prices"
                  className="p-2 border-2 border-gray-300 rounded-md focus:outline-none"
                  required
                />

                <button className="px-4 md:px-6 py-2 md:py-3 max-md:hidden bg-gradient-to-b from-[#1b1873] to-[#2D3CD9] shadow-[inset_0px_4px_10px_rgba(0,0,0,0.25)] rounded-[24px] text-[#FFFFFF] font-dm-sans font-semibold text-[14px] md:text-[16px] leading-[21px]">
                  List Product
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Section: Image Preview */}
        <div className="md:w-1/2 flex justify-center items-center border-gray-400 min-h-screen w-full">
          <div className="flex justify-center items-center border-2 border-dashed border-[#1b1873] rounded-lg p-6 h-80">
            {file ? (
              <img
                src={file}
                alt="Preview"
                className="max-w-full w-[100%] h-[90%] max-h-full object-cover mx-auto"
              />
            ) : (
              <div className="text-gray-500 flex flex-col items-center">
                <div className="flex justify-center w-full">
                  <svg
                    width="61"
                    height="60"
                    viewBox="0 0 71 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M69.7703 55.2525V14.7217C69.7703 11.1386 68.3281 7.70216 65.7611 5.16849C63.1941 2.63483 59.7125 1.21143 56.0822 1.21143H15.0181C11.3878 1.21143 7.90622 2.63483 5.33921 5.16849C2.77221 7.70216 1.33008 11.1386 1.33008 14.7217V55.2525C1.33008 58.8357 2.77221 62.272 5.33921 64.8057C7.90622 67.3394 11.3878 68.7628 15.0181 68.7628M69.7703 55.2525C69.7703 58.8357 68.3281 62.272 65.7611 64.8057C63.1941 67.3394 59.7125 68.7628 56.0822 68.7628H15.0181M69.7703 55.2525V55.7017C69.7703 59.1657 68.3761 62.4879 65.8944 64.9373C63.4128 67.3867 60.0469 68.7628 56.5374 68.7628H15.0181M69.7703 55.2525C69.7703 53.6786 69.1714 53.074 68.0935 51.9087L54.3028 37.0643C53.6601 36.3723 52.8782 35.8201 52.0072 35.443C51.1362 35.0659 50.1951 34.8721 49.244 34.874C48.2928 34.8759 47.3525 35.0734 46.4831 35.4541C45.6136 35.8347 44.8341 36.39 44.1942 37.0846L15.0181 68.7628M32.1282 23.1656C32.1282 27.8291 28.298 31.6095 23.5731 31.6095C18.8483 31.6095 15.0181 27.8291 15.0181 23.1656C15.0181 18.5022 18.8483 14.7217 23.5731 14.7217C28.298 14.7217 32.1282 18.5022 32.1282 23.1656Z"
                      stroke="#545454"
                      strokeWidth="1.77767"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-center mt-2">Uploaded image will display here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop9;
