import React, { useState } from "react";
import { ethers } from "ethers";

function ConnectWalletButton() {
  const [walletAddress, setWalletAddress] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        // 최신 ethers.js에서 BrowserProvider 사용
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        setWalletAddress(address);
        console.log("Wallet connected:", address);

        return signer;
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      alert(
        "MetaMask is not installed. Please install MetaMask and try again."
      );
      console.error("No Ethereum provider found");
    }
  }

  return (
    <div>
      {walletAddress ? (
        <p>Connected as: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default ConnectWalletButton;
