import React, { useState } from "react";

function WalletPopup() {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className=" fixed inset-0 flex items-center justify-center z-50">
          <div
            className="bg-gray-900 opacity-50 fixed inset-0"
            onClick={closePopup}
          ></div>
          <div className="bg-white rounded-lg p-6 w-[400px] h-[450px] z-10 shadow-lg relative  max-w-md">
            <button
              className="absolute w-3 h-3 top-4 right-7 text-gray-500 hover:text-gray-700"
              onClick={closePopup}
            >
              &#10005;
            </button>
            <div className="w-full border-t-[0.45px]  border-[#888282]  mt-10 mb-4"></div>
            <div className="flex flex-col items-center space-y-4 ">
              <div className="text-2xl font-semibold">Connect Wallet</div>
              <p className="text-[#2D2D2D]">
                Select your preferred Wallet below
              </p>
              <button className="flex items-center w-full justify-start py-2 px-4 rounded-lg border border-gray-300 font-semibold hover:bg-gray-100">
                <img
                  src="https://cryptologos.cc/logos/metamask-fox-logo.png"
                  alt="MetaMask"
                  className="w-6 h-6 mr-3"
                />
                MetaMask
              </button>
              <button className="flex items-center w-full justify-start py-2 px-4 rounded-lg border border-gray-300 font-semibold hover:bg-gray-100">
                <img
                  src="https://cryptologos.cc/logos/coinbase-coin-logo.png"
                  alt="Coinbase Wallet"
                  className="w-6 h-6 mr-3"
                />
                Coinbase Wallet
              </button>
              <button className="flex items-center w-full justify-start py-2 px-4 rounded-lg border border-gray-300 font-semibold hover:bg-gray-100">
                <img
                  src="https://cryptologos.cc/logos/trust-wallet-trust-logo.png"
                  alt="Trust Wallet"
                  className="w-6 h-6 mr-3"
                />
                Trust Wallet
              </button>
              <p className="text-blue-500 hover:underline cursor-pointer">
                Click for more wallet options
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WalletPopup;
