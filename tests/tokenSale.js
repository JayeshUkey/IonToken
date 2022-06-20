const { expect } = require('chai');
const { ethers } = require('hardhat');

//import MyClass from "./utilities/utilities"

const {
  time, // time
  constants,
} = require('@openzeppelin/test-helpers');
// const { parseEther } = require("@ethersproject/units");
// const balance = require("@openzeppelin/test-helpers/src/balance");
// const web3 = require("@nomiclabs/hardhat-web3");
const BN = require('ethers').BigNumber;

beforeEach(async () => {
  console.log('dgfhgjk');

  [owner, user1, user2, user3, user4] = await ethers.getSigners();
  provider = ethers.provider;

  Admin = await ethers.getContractFactory('Admin');
  TokenSale = await ethers.getContractFactory('TokenSale');
  Token = await ethers.getContractFactory('Token');
  LpToken = await ethers.getContractFactory('Token');
  Staking = await ethers.getContractFactory('Staking');
  Oracle = await ethers.getContractFactory('ChainLink');
  Airdrops = await ethers.getContractFactory('Airdrops');
  Weth = await ethers.getContractFactory('WETH');
  Factory = await ethers.getContractFactory('UniswapV2Factory');
  Router = await ethers.getContractFactory('UniswapV2Router01');
  getinit = await ethers.getContractFactory('CalHash');
  //Ebsc = await ethers.getContractFactory("EBSC");

  Getinit = await getinit.deploy();
  await Getinit.deployed();
  console.log('init', await Getinit.getInitHash());

  token = await Token.deploy('Token', 'tkn');
  await token.deployed();

  // ebscToken = await Ebsc.deploy();
  // await ebscToken.deployed();

  lpToken = await Token.deploy('LPToken', 'lptkn');
  await lpToken.deployed();

  factory = await Factory.deploy(owner.address);
  await factory.deployed();

  weth = await Weth.deploy();
  await weth.deployed();
  // console.log("Weth address: ", weth.address);

  router = await Router.deploy(factory.address, weth.address);
  await router.deployed();

  adminContract = await Admin.deploy();
  await adminContract.deployed();

  tokenSaleContract = await TokenSale.deploy();
  await tokenSaleContract.deployed();

  oracle = await Oracle.deploy();
  await oracle.deployed();

  stakingContract = await Staking.deploy();
  await stakingContract.deployed();

  airdropContract = await Airdrops.deploy(
    stakingContract.address,
    adminContract.address,
    lpToken.address
  );
  await airdropContract.deployed();

  console.log('Deployment done');
});
