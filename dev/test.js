const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

console.log(bitcoin);

/*const previousBlockHash = 'previousblockhash';
const currentBlockData = [
    {
        amount: 100,
        sender: 'senderjohn2qwa0q33w',
        recipient: 'recipientadam3132131312321'
    },
    {
        amount: 32,
        sender: 'senderwarioasdahdsads',
        recipient: 'recipientlyn0234324932'
    }
];
//const nonce = 4195;

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

bitcoin.createNewBlock(6454, "ADSS", "OSUDS8");
bitcoin.createNewBlock(500, "BDDW5", "HHKK0004");
bitcoin.createNewBlock(2345, "0939492A", "AZASA83");

bitcoin.createNewTransaction(100, "address", "recipient");
bitcoin.createNewTransaction(500, "address", "recipient");
bitcoin.createNewTransaction(2345, "address", "recipient");
bitcoin.createNewBlock(2345, "aloha", "si");


//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
//console.log(bitcoin);
//console.log(bitcoin.chain[1]);

*/