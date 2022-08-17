require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    compilers:[
      
      {
        version:"0.8.1",
      },
      {
        version:"0.8.0",
      }
    ]
  },
  networks: {
    rinkeby: {
      url: 'https://compatible-cool-snow.rinkeby.discover.quiknode.pro/1980f62887a582892718b373ac28b2bcf822accf/',
      accounts: ['8c7d1cb56a2e078fcf9c9c78fcdbecf1c8dce4db2f7e2a3c0c3ca23a3dd46a1b'],
    },
  },
   }
