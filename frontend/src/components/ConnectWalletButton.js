import React, { useState } from 'react';
import { ethers } from 'ethers';
import './ConnectWalletButton.css';

function ConnectWalletButton() {
  const [walletAddress, setWalletAddress] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        setWalletAddress(address);
        console.log('Wallet connected:', address);

        return signer;
      } catch (error) {
        console.error('User denied account access', error);
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask and try again.');
      console.error('No Ethereum provider found');
    }
  }

  return (
    <div className="connect-wallet-button">
      {walletAddress ? (
        <p>
          Connected as:<br />
          {walletAddress.substring(0, 12)}...{walletAddress.substring(walletAddress.length - 4)}
        </p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default ConnectWalletButton;