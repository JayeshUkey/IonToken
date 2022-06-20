// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

/**
 * @title IStaking.
 * @dev interface for staking
 * with params enum and functions.
 */
interface IAirdrops {
    function depositAssets(address, uint256, uint256) external payable;
    function setShareForBNBReward(address, uint256) external;
    function userPendingBNB(address user, uint amount) external;
    function pushEBSCAmount(uint _amount) external;
    function withdrawEBSC(address user, uint _amount) external;
    function withdrawBNB(address user, uint _amount) external;
    function setShareForEBSCReward (address user,uint _prevLock, uint _amount) external; 
    function userPendingEBSC(address user) external;
    function setTotalBNB(uint _amount) external;
    function checkEpoch() external view returns(bool);
    function setEpoch() external;
    function distributionEBSC(uint amount) external;
    function distributionBNB() external;
    function setMarketingWallet(address _address) external;
}
