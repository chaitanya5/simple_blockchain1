const Block = require('./block')

class Blockchain{

    constructor(){
        //first chain will be genesis block
        this.chain = [new Block(0,new Date().toUTCString(),'genesis block','0')]
    }

    addBlock(data){
        const index = this.chain.length;//Current block is (length minus 1)
        const timestamp = new Date().toUTCString();
        const prevHash = this.chain[this.chain.length-1].hash;
        const newBlock = new Block(index,timestamp,data,prevHash)

        if(this.isValidBlock(newBlock)){
            this.chain.push(newBlock)
        }
        else return console.log('Invalid Block')
    }

    isValidBlock(newBlock){
        const currentBlock = this.chain[this.chain.length - 1]

        if(currentBlock.index + 1 !== newBlock.index)
            return false;
        else if(currentBlock.hash !== newBlock.prevHash)
            return false;
        else if(newBlock.hash !== newBlock.calcHash())
            return false;
        else
            return true;
    }

}

module.exports = Blockchain;