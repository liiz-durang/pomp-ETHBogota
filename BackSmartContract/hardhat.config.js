/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@semaphore-protocol/hardhat");
require("./tasks/deploy") // Your deploy task.


module.exports = {
      solidity: {
         compilers: [
         {
            version: "0.8.16",
         },
         {
            version: "0.8.4",
            settings: {},
         },
         ],
   },
   defaultNetwork: "optimism-goerli",
   networks: {
      hardhat: {},
      'optimism-goerli': {
         //use ankr's public RPC if you want to launch the contract on Mainnet -> rpc.ankr.com/optimism
         url: "https://goerli.optimism.io",
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
   },
}
