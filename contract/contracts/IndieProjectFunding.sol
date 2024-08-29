// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IndieProjectFunding {
    struct IndieProject {
        uint totalGT;
        ProjectDAO dao;
    }

    struct ProjectDAO {
        address teamAccount;
        GovernanceVault vault;
        mapping(address => Supporter) supporters;
        address creator;
        uint proposalCount;
        mapping(uint => Proposal) proposals;
    }

    struct GovernanceVault {
        uint ethBalance;
        uint GTBalance;
    }

    struct Supporter {
        uint GTBalance;
        uint ethBalance;
    }

    struct Proposal {
        string title;
        uint amount;
        uint yesVotes;
        uint noVotes;
        uint endTime;
        bool executed;
        mapping(address => bool) voters;
    }

    mapping(uint => IndieProject) private projects;
    uint public projectCount;

    function createProject(address _teamAccount, address _creator) public {
        projectCount++;
        ProjectDAO storage newDAO = projects[projectCount].dao;
        newDAO.teamAccount = _teamAccount;
        newDAO.creator = _creator;

        IndieProject storage newProject = projects[projectCount];
        newProject.totalGT = 0;
    }

    function startFunding(uint projectIndex, uint _requiredEth) public {
        IndieProject storage project = projects[projectIndex];
        project.totalGT = _requiredEth * 10;
        project.dao.vault.GTBalance = project.totalGT;
    }

    function contribute(uint projectIndex) public payable {
        IndieProject storage project = projects[projectIndex];
        require(msg.value > 0, "You must send some Ether");

        project.dao.supporters[msg.sender].ethBalance += msg.value;
        uint GTAmount = msg.value;
        project.dao.supporters[msg.sender].GTBalance += GTAmount;

        project.dao.vault.ethBalance += msg.value;
    }

    function propose(uint projectIndex, string memory proposalTitle, uint _amount) public {
        IndieProject storage project = projects[projectIndex];
        require(msg.sender == project.dao.creator, "Only the creator can propose");

        uint proposalIndex = project.dao.proposalCount;
        project.dao.proposals[proposalIndex].title = proposalTitle;
        project.dao.proposals[proposalIndex].amount = _amount;
        project.dao.proposals[proposalIndex].endTime = block.timestamp + 1 weeks;
        project.dao.proposals[proposalIndex].executed = false;

        project.dao.proposalCount++;
    }

    function vote(uint projectIndex, uint proposalIndex, bool approve) public {
        IndieProject storage project = projects[projectIndex];
        Proposal storage proposal = project.dao.proposals[proposalIndex];
        
        require(block.timestamp < proposal.endTime, "Voting period has ended");
        require(project.dao.supporters[msg.sender].GTBalance > 0, "You are not a supporter");
        require(!proposal.voters[msg.sender], "You have already voted");
        
        if (approve) {
            proposal.yesVotes += project.dao.supporters[msg.sender].GTBalance;
        } else {
            proposal.noVotes += project.dao.supporters[msg.sender].GTBalance;
        }
        
        proposal.voters[msg.sender] = true;
    }

    function executeProposal(uint projectIndex, uint proposalIndex) public {
        IndieProject storage project = projects[projectIndex];
        Proposal storage proposal = project.dao.proposals[proposalIndex];
        
        require(block.timestamp >= proposal.endTime, "Voting period has not ended");
        require(!proposal.executed, "Proposal has already been executed");
        
        if (proposal.yesVotes > proposal.noVotes) {
            require(proposal.amount <= project.dao.vault.ethBalance, "Not enough funds in governance vault");
            payable(project.dao.teamAccount).transfer(proposal.amount);
            project.dao.vault.ethBalance -= proposal.amount;
        }
        
        proposal.executed = true;
    }

    // Custom getter function for project details
    function getProject(uint projectIndex) public view returns (
        uint totalGT,
        address teamAccount,
        uint ethBalance,
        uint GTBalance,
        address creator
    ) {
        IndieProject storage project = projects[projectIndex];
        return (
            project.totalGT,
            project.dao.teamAccount,
            project.dao.vault.ethBalance,
            project.dao.vault.GTBalance,
            project.dao.creator
        );
    }
}
