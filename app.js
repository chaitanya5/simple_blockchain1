const Blockchain = require('./blockchain')

const myChain = new Blockchain();

myChain.addBlock('second')
myChain.addBlock('third')

console.log(myChain)