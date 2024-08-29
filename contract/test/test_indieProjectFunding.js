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

    console.log("Contract deployed");

    // 기본 프로젝트 생성 (팀 계좌 주소 제거, 오직 creator 주소만 사용)
    await contract.createProject(owner.address);
    console.log("Project created with creator:", owner.address);

    await contract.startFunding(1, 10);  // 1번 프로젝트로 설정 (프로젝트 인덱스가 1부터 시작)
    console.log("Funding started for project 1 with required GT:", 10);
  });

  it("Should allow contribution and update vault balance", async function () {
    // 후원자가 프로젝트에 기부 (1 ETH)
    await contract.connect(addr1).contribute(1, { value: "1000000000000000000" });
    console.log("Contribution made by:", addr1.address, "Amount: 1 ETH");

    // 프로젝트의 잔액 확인
    const project = await contract.getProject(1);
    console.log("Project 1 ETH balance:", project.ethBalance.toString());

    expect(project.ethBalance.toString()).to.equal("1000000000000000000");
  });

  it("Should allow the creator to propose and supporters to vote", async function () {
    // 후원자가 기부함으로써 후원자로 등록 (1 ETH)
    await contract.connect(addr1).contribute(1, { value: "1000000000000000000" });
    console.log("Contribution made by:", addr1.address, "Amount: 1 ETH");

    // 제안 생성 - 1 ETH 전부를 요청
    const proposalAmount = "1000000000000000000"; // 1 ETH를 의미하는 직접적인 숫자 문자열
    await contract.propose(1, "Proposal to use funds", proposalAmount);
    console.log("Proposal created by creator:", owner.address, "Amount requested:", proposalAmount);

    // 후원자가 찬성 투표
    await contract.connect(addr1).vote(1, 0, true);
    console.log("Vote cast by:", addr1.address, "Vote: Yes");

    // 제안 실행
    await contract.executeProposal(1, 0);
    console.log("Proposal executed");

    // 팀 계좌로 자금이 이체되었는지 확인
    const project = await contract.getProject(1);
    console.log("Project 1 ETH balance after proposal execution:", project.ethBalance.toString());

    // 팀 계좌의 잔액을 확인 (추가된 부분)
    const teamAccountBalance = project.teamEthBalance;
    console.log("Team account ETH balance:", teamAccountBalance.toString());

    // 팀 계좌 잔액이 1 ETH인지 확인
    expect(teamAccountBalance.toString()).to.equal("1000000000000000000");

    // 프로젝트 잔액이 정확히 0인지 확인
    expect(project.ethBalance.toString()).to.equal("0");
  });
});
