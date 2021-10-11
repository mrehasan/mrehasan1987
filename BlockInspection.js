const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/ef8f15d16eff4dca9e7e80ecf89c28a2');


const blockInspectionAsync = async ()=>{
    try{
const blockNumber =  await web3.eth.getBlockNumber().then(console.log);

const blockNumberLatest = await web3.eth.getBlock('latest').then(console.log);

const gettingfive = await web3.eth.getBlockNumber().then((latest) => {
    for (let i = 0; i < 5; i++) {
      web3.eth.getBlock(latest - i).then(console.log)
    }
  })

    }
    catch(error){
        console.log('error',error)
    }
}
blockInspectionAsync();