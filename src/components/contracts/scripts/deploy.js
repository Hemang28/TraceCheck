const ethers = require('ethers');
require('dotenv').config();

async function main() {

  const url = process.env.AlCHEMY_TESTNET_RPC_URL;

  let artifacts = await hre.artifacts.readArtifact("Register");

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.TESTNET_PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a Register Factory
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let register = await factory.deploy();

  console.log("Register address:", register.address);

  await register.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});