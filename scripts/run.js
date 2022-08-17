const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["SpongeBob", "Burbuja", "Tom"],       // Names
      ["https://i.pinimg.com/564x/1c/58/87/1c5887fb8312e0f6fd6f769577af7825.jpg", // Images
      "https://i.pinimg.com/564x/82/24/4e/82244e57b8c904552bdfc136c19c7f89.jpg", 
      "https://i.pinimg.com/564x/a1/69/69/a169697fa2e371f9ad54ad926926b04d.jpg"],
      [200, 200, 300],                    // HP values
      [100, 50, 70],
      "BigBig", // Boss name
        "https://i.pinimg.com/originals/ac/84/31/ac8431b0164bbd48e269fed8d28cd15e.png", // Boss image
        10000, // Boss hp
        50                  // Attack damage values                           // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    let txn;
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();



// Get the value of the NFT's URI.
let returnedTokenUri = await gameContract.tokenURI(1);
console.log("Token URI:", returnedTokenUri);

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();