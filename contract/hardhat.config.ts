import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // 로컬 네트워크 설정
    },
    hardhat: {
      chainId: 1337, // 기본 로컬 네트워크 체인 ID
    },
    // 다른 네트워크 설정을 추가할 수 있습니다.
  },
  defaultNetwork: process.env.HARDHAT_NETWORK || "hardhat", // 기본 네트워크를 환경 변수에서 가져오거나 hardhat으로 설정
};

export default config;