async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const TeamBuildingContract = await ethers.getContractFactory(
    "TeamBuildingContract"
  );
  const teamBuilding = await TeamBuildingContract.deploy("ProjectName");

  console.log("Contract deployed to:", teamBuilding.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
