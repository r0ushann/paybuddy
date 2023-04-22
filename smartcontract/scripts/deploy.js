
const hre = require("hardhat");

async function main() {
  

  const Pay = await hre.ethers.getContractFactory("Pay");
  const pay = await Pay.deploy();

  await pay.deployed();


  console.log(
    `Pay deployed to ${pay.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
