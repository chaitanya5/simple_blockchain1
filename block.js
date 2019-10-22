const  crypto = require('crypto')

class Block{
    constructor(index,timestamp,data,prevHash){
        this.index = index;
        this.timestamp = timestamp;
        this.data  = data;
        this.prevHash = prevHash;
        this.hash = this.calcHash();
    }

    calcHash(){
        const blockData = this.index + this.timestamp + JSON.stringify(this.data) + this.prevHash
        return crypto.createHash('sha256').update(blockData).digest('hex')
    }
}

module.exports = Block;