//hardhat.config.js

require('@nomiclabs/hardhat-ethers');
const dotenv = require("dotenv");

dotenv.config();
const privateKey = process.env.privateKey;
console.log('-----------------------', privateKey)

module.exports = {
  solidity: "0.8.1",
  networks: {
    inEVM: {
      url: "https://inevm.calderachain.xyz/http",
      chainId: 2525,
      accounts: [privateKey]
    },
    inEVMtest: {
      url: "https://inevm-rpc.caldera.dev",
      chainId: 1738,
      accounts: [privateKey]
    }
  },
}