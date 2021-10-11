const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/ef8f15d16eff4dca9e7e80ecf89c28a2');

const utilitiesAsync = async()=>{
    try{
const gasPrice = await web3.eth.getGasPrice();
console.log ('Gas Price: ', web3.utils.fromWei(gasPrice,'gwei'));
    }
    catch(error){
        ('error', error)
    }
} 
utilitiesAsync();