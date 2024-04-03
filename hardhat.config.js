//hardhat.config.js
require('@nomiclabs/hardhat-ethers');
const { privateKey } = require('./config');

module.exports = {
  solidity: "0.8.20",
  networks: {
    inEVM: {
      url: "https://mainnet.rpc.inevm.com/http",
      chainId: 2525,
      accounts: [privateKey]
    },
    inEVMtest: {
      url: "https://testnet.rpc.inevm.com/http",
      chainId: 2424,
      accounts: [privateKey]
    }
  },
}