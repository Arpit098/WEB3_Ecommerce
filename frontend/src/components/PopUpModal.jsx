import React, { useState } from 'react';
import './popUpModal.css'; // You'll need to create this CSS file
import metamaskIcon from '../assets/metamask.png';
import walletConnectIcon from '../assets/walletconnect.png';
import coinbaseIcon from '../assets/coinbase.png';

const PopUpModal = ({ isOpen, onClose, onWalletConnect }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Connect Wallet</h2>
                    <button className="close-button" onClick={onClose}> × </button>
                </div>
                <div className="wallet-options">
                    {walletOptions.map((wallet) => (
                        <button
                            key={wallet.name}
                            className="wallet-option"
                            onClick={wallet.handler}
                        >
                            <img src={wallet.icon} alt={wallet.name} />
                            <span>{wallet.name}</span>
                        </button>
                    ))}
                </div>
                <p className="modal-footer">
                    By connecting a wallet, you agree to our Terms of Service
                </p>
            </div>
        </div>
    );
};

export default PopUpModal;