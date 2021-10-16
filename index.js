const shah256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, data, previousHash = "") {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return shah256(this.timestamp + JSON.stringify(this.data) + this.previousHash).toString();
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.generateGenesisBlock()];
    }

    generateGenesisBlock() {
        return new Block("2019-01-01", "GENESIS", "0000");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isBlockchainValid() {
        
    }
}

const josscoin = new BlockChain();
const block = new Block(new Date().toISOString(), { amount: 5 });

josscoin.addBlock(block);
console.log(josscoin);
