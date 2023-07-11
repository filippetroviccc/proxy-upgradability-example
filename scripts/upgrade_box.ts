// scripts/upgrade.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    const box = await upgrades.upgradeProxy("0xa4e7aD03fb5C3cd48AeF10688B7F24b08937Addf", BoxV2);
    console.log("Box upgraded to:", await box.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });