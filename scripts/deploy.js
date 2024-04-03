// scripts/deploy.js
async function main() {
    // 1. Get the contract to deploy
    const USDT = await ethers.getContractFactory('USDT');
    console.log('Deploying contract...');
 
    // 2. Instantiating a new smart contract
    const usdt = await USDT.deploy();
 
    // 3. Waiting for the deployment to resolve
    await usdt.deployed();
 
    // 4. Use the contract instance to get the contract address
    console.log('USDT deployed to:', usdt.address);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });