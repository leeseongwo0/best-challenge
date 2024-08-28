// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TeamBuildingContract {
    struct TeamMember {
        address memberAddress;
        uint256 profitShare;  // 수익 배분 비율
    }

    address public leader;
    string public projectName;
    TeamMember[] public teamMembers;

    constructor(string memory _projectName) {
        leader = msg.sender;
        projectName = _projectName;
    }

    function addTeamMember(address _memberAddress, uint256 _profitShare) public {
        require(msg.sender == leader, "Only leader can add team members");
        teamMembers.push(TeamMember(_memberAddress, _profitShare));
    }

    function getTeamMembers() public view returns (TeamMember[] memory) {
        return teamMembers;
    }
}