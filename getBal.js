const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/c0faa57e24104aa7a00eb38669bb2385";
const address= "0x9B8508666970669623Bf6bD6B9d0F1389e6D0dc3";

const web3 = new Web3(rpcURL);

const getBalanceAsync = async ()=>{
try{
  const wei = await web3.eth.getBalance(address);
  const balance = web3.utils.fromWei(wei, 'ether');
  console.log ('Balance', balance);
} catch (err) {
  console.log('Error', err)
}
}
  getBalanceAsync();