const Web3 = require('web3');
const Tx = require("ethereumjs-tx").Transaction;

const rpcURL = "https://ropsten.infura.io/v3/c0faa57e24104aa7a00eb38669bb2385";

const web3= new Web3(rpcURL);

const account1= "0x298b4292b2E7393c459E14bf1d0caAF561F8619c";
const privatekey = "da904dba706da44f75671ee6d00721f01f118fac76dcf347e167b4e92624fdf6";
const account1_privatekey= Buffer.from(privatekey, 'hex');
 
const account2= "0x100AB27C16f5E8aE6216A2E600dF059e1814314B";


  const ethTransactionAsync = async()=>{
      try{
          const nonce = await web3.eth.getTransactionCount(account1);
        const txObject = {
            nonce:    web3.utils.toHex(nonce),
            to:       account2,
            value:    web3.utils.toHex(web3.utils.toWei('0.01', 'ether')),
            gasLimit: web3.utils.toHex(21000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
          }
            const trx = new Tx(txObject,{'chain': 'ropsten'});
            trx.sign(account1_privatekey);
            
            const serializedTx= trx.serialize();
            const raw = '0x'+ serializedTx.toString('hex');
            const response = await web3.eth.sendSignedTransaction(raw);
            console.log('Hash:', response);
      }catch(error){
          ('error',error)

      }
  }
  ethTransactionAsync();