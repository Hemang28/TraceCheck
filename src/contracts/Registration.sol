// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Register {
    struct User {
        string name;
        string email;
        string profileImage;
        // uint userId;
    }

    struct IssuingAuthority {
        string name;
        string email;
        // uint userId;
    }

    mapping(address => User) private usersMapping;
    mapping(address => bool) private isUserAdded;
    mapping(address => IssuingAuthority) private issuingAuthorityMapping;
    mapping(address => bool) private isIssuingAuthorityAdded;

    modifier onlyNewUser() {
        require(!isUserAdded[msg.sender], "User is already registered");
        _;
    }

    modifier onlyNewIssuingAuthority() {
        require(!isIssuingAuthorityAdded[msg.sender], "IssuingAuthority is already registered");
        _;
    }

    function setUser(string memory _name, string memory _email, string memory _profileImage) public onlyNewUser {
        usersMapping[msg.sender] = User(_name, _email, _profileImage);
        isUserAdded[msg.sender] = true;
    }

    function getUser(address _address) public view returns (User memory) {
        return usersMapping[_address];
    }

    function setIssuingAuthority(string memory _name, string memory _email) public onlyNewIssuingAuthority {
        issuingAuthorityMapping[msg.sender] = IssuingAuthority(_name, _email);
        isIssuingAuthorityAdded[msg.sender] = true;
    }

    function getIssuingAuthority(address _address) public view returns (IssuingAuthority memory) {
        return issuingAuthorityMapping[_address];
    }
}