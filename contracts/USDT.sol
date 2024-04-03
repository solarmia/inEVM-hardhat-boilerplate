// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDT is ERC20, Ownable {
    uint256 constant INITIAL_SUPPLY = (10 ** 40) * (10 ** 18);

    constructor() ERC20("TEST USDT", "TUSD") Ownable(_msgSender()) {
        _mint(address(this), INITIAL_SUPPLY);
        _mint(_msgSender(), INITIAL_SUPPLY);
    }

    function mint(address _user, uint256 _amount) external onlyOwner {
        _mint(_user, _amount);
    }
}
