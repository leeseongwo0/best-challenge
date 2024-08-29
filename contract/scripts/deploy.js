const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Contract factory 가져오기
  const IndieProjectFunding = await ethers.getContractFactory("IndieProjectFunding");

  // Contract 배포
  const contract = await IndieProjectFunding.deploy();
  await contract.deployed();

  console.log("IndieProjectFunding deployed to:", contract.address);

  // 배포된 계약 주소 저장
  const deployedContracts = {
    address: contract.address,
    deployer: deployer.address,
    network: hre.network.name,
  };

  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/IndieProjectFunding-address.json",
    JSON.stringify(deployedContracts, undefined, 2)
  );

  // ABI 파일 복사
  const IndieProjectFundingArtifact = await hre.artifacts.readArtifact("IndieProjectFunding");

  fs.writeFileSync(
    contractsDir + "/IndieProjectFunding.json",
    JSON.stringify(IndieProjectFundingArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
