import React, { useState, useRef } from "react";

const Desktop9 = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileURL = URL.createObjectURL(selectedFile);
    setFile(fileURL);
  };

  const handleClearFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Clear the file input value
    }
  };

  return (
    <>
    <div className="">

    </div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-[165px]">
        <div className="relative w-[900px] h-[541px] pt-6 gap-4 rounded-tl-lg border-t border-gray-300 opacity-100 shadow-lg flex">
          <div className="w-1/2 p-6">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none"
                  ref={fileInputRef}
                />
                {file && (
                  <button
                    type="button"
                    onClick={handleClearFile}
                    className="mt-2 bg-gray-500 text-white p-2 rounded-md hover:bg-gray-200 transition"
                  >
                    Clear
                  </button>
                )}
              </div>
              <input
                type="text"
                placeholder="Title"
                className="p-2 border border-gray-300 rounded-md focus:outline-none"
              />

              {/* Description */}
              <textarea
                placeholder="Description"
                rows="4"
                className="p-2 border border-gray-300 rounded-md focus:outline-none"
              />

              {/* Stocks input */}
              <input
                type="number"
                placeholder="Stocks"
                className="p-2 border border-gray-300 rounded-md focus:outline-none"
              />

              {/* Prices input */}
              <input
                type="number"
                placeholder="Prices"
                className="p-2 border border-gray-300 rounded-md focus:outline-none"
              />

              {/* Submit button */}
              <button className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">
                List Product
              </button>
            </form>
          </div>

          {/* Right Section: Image Preview */}
          <div className="w-1/2 flex justify-center items-center border-2 border-dashed border-gray-400 rounded-lg p-6">
            {file ? (
              <img
                src={file}
                alt="Preview"
                className="max-w-full max-h-full object-cover"
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
