/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.7',

  networks: {
    hardhat: {
      // forking: {
      // url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyApi}`,
      //  enabled: true,
    },
  },
  bsctestnet: {
    // url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    //  accounts: [`0x${privateKey}`]
  },

  local: {
    // url: 'http://127.0.0.1:8545/',
    // allowUnlimitedContractSize: true,
    // accounts: ['0xD61a83BBef2933B5b19B779D124faa4e936B486e'],
    // blockGasLimit: 1200000000
  },
};
