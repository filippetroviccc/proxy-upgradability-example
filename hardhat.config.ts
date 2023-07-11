import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';


const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    tenderly: {
        url: "https://rpc.tenderly.co/fork/6bf4a46b-6189-47d8-b8fe-f99e9231112e",
    }
  }
};

export default config;
