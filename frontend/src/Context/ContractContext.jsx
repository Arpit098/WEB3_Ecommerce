import React, { useState, useContext, createContext } from "react";
import { ethers } from "ethers";

const ContractContext = createContext();

// Provider component to wrap your app and provide contract functionalities
export const ContractProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [Instance, setInstance] = useState();

  // Function to connect to a wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      send_request(new ethers.BrowserProvider(window.ethereum));
    } else {
      console.error("MetaMask not found. Please install it.");
    }
  };
  const send_request = async (provider) => {
    // Request wallet connection
    try {
      const accounts = await provider.send("eth_requestAccounts", []);
      setCurrentUser(accounts[0]);
      console.log(accounts[0]);
      const signer = provider?.getSigner();
      console.log(signer);
    } catch (e) {
      console.log(e);
    }
  };

  // Provide the context value
  return (
    <ContractContext.Provider value={{ connectWallet }}>
      {children}
    </ContractContext.Provider>
  );
};

// Custom hook to use the contract context
export const useContract = () => {
  return useContext(ContractContext);
};
