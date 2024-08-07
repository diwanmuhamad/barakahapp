require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});

const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    haqq: {
        url: "https://rpc.eth.haqq.network",
        accounts: [PRIVATE_KEY]
    },
    testedge: {
        url: "https://rpc.eth.testedge2.haqq.network",
        accounts: [PRIVATE_KEY]
    }
},
};
