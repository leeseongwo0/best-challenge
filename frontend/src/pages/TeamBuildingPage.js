import React from "react";
import { ethers } from "ethers";
import TeamBuildingContractABI from "../contracts/TeamBuildingContract.json";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS; // .env에서 컨트랙트 주소 가져오기

function TeamBuildingPage() {
  async function getTeamMembers() {
    try {
      // 최신 ethers.js에서 BrowserProvider 사용
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // 스마트 컨트랙트 인스턴스 생성
      const contract = new ethers.Contract(
        contractAddress,
        TeamBuildingContractABI,
        signer
      );

      // 컨트랙트 함수 호출
      const members = await contract.getTeamMembers();
      console.log("Team members:", members);
    } catch (error) {
      console.error("Error fetching team members", error);
    }
  }

  return (
    <div>
      <h1>Team Building Page</h1>
      <button onClick={getTeamMembers}>Get Team Members</button>
    </div>
  );
}

export default TeamBuildingPage;
