// SPDX-License-Identifier: UNLICENSED


pragma solidity ^0.8.4;

import "./libraries/StakingLibrary.sol";


/**
 * @title IStaking.
 * @dev interface for staking
 * with params enum and functions.
 */
interface IStaking {
    /**
     * @dev
     * defines privelege type of address.
     */

    function setPoolsEndTime(address, uint256) external;

    function stakedAmountOf(address) external view returns (uint256);

    function setTierTo(address _address, uint _tier) external;

    function unsetTierOf(address _address) external;
    
    function stake(uint256 , uint256) external payable;

    function getAllocationOf(address) external returns (uint128);

    function unstake() external;

    function getUserState(address)
        external
        returns (
            uint,
            uint,
            uint256,
            uint256
        );

    function stateOfUser(address)
        external
        returns (
            uint32,
            uint32,
            uint64,
            uint128
        );

    function getTierOf(address) external view returns (uint);
    function getReflection() external view returns (uint256);
    function setBNBFeeLockLevel(uint) external;
}
