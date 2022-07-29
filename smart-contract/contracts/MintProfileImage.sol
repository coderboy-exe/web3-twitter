// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// Import this file to use console.log
import "hardhat/console.sol";

contract ProfileImageNfts is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;

    mapping (uint => string) _tokenURIs;

    struct RenderToken {
        uint256 id;
        string uri;
        string space;
    }

    constructor() ERC721("ProfileImageNfts", "PIN"){
        
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI)  internal {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns(string memory) {
        require(_exists(tokenId), "Sorry, URI doesn't exist for that ID");
        string memory _RUri = _tokenURIs[tokenId];
        return _RUri;
    }

    function getAllTokens() public view returns (RenderToken[] memory) {
        uint256 latestId = _tokenIds.current();
        RenderToken[] memory res = new RenderToken[](latestId);
        for(uint256 i = 0; i <= latestId; i++) {
            if(_exists(i)) {
                string memory uri = tokenURI(i);
                res[i] = RenderToken(i, uri, " ");
            }
        }
        return res;
    }

    function mint(address recipients, string memory _uri) public returns (uint256) {
        uint256 newId = _tokenIds.current();
        _mint(recipients, newId); //Built-in mint function
        _setTokenURI(newId, _uri);
        _tokenIds.increment();
        return newId;
    }
}
