const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmT6eWwJprf8pxW9WQ4bymSTqi3Pe1JiU47LNbxFaB3nKw"
  const WALLET_ADDRESS = "0x0A469bAF8DddD88fBF79D78EC3438ad3816BEE23"
  const CONTRACT_ADDRESS = "0x51746B6FA773874Ef5b76544559BE13bB7B82dFe"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});