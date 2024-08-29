const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("IndieProjectFunding Contract", function () {
  let IndieProjectFunding;
  let contract;
  let owner;
  let addr1;

  beforeEach(async function () {
    IndieProjectFunding = await ethers.getContractFactory("IndieProjectFunding");
    [owner, addr1] = await ethers.getSigners();

    // 계약을 배포하고 바로 사용합니다.
    contract = await IndieProjectFunding.deploy();

    // 배포 후 바로 계약을 사용하여 다음 작업으로 넘어갑니다.
    await contract.deployed();

    // 기본 프로젝트 생성
    await contract.createProject(addr1.address, owner.address);
    await contract.startFunding(1, 10);  // 1번 프로젝트로 설정 (프로젝트 인덱스가 1부터 시작)
  });

  it("Should allow contribution and update vault balance", async function () {
    // 후원자가 프로젝트에 기부
    await contract.connect(addr1).contribute(1, { value: ethers.utils.parseEther("1") });

    // Governance Vault의 잔액 확인
    const project = await contract.getProject(1);
    expect(project[2]).to.equal(ethers.utils.parseEther("1"));  // ethBalance
  });

  it("Should allow the creator to propose and supporters to vote", async function () {
    // 제안 생성
    await contract.propose(1, "Proposal to use funds", 5);

    // 후원자가 찬성 투표
    await contract.connect(addr1).vote(1, 0, true);

    // 제안 실행
    await contract.executeProposal(1, 0);

    // 팀 계좌로 자금이 이체되었는지 확인
    const project = await contract.getProject(1);
    expect(project[2]).to.equal(ethers.utils.parseEther("0"));  // ethBalance
  });
});
