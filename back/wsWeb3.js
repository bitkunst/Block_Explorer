const Web3 = require('web3');
const { BlockHeader, Transaction } = require('./database/models');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:9005'));

const wsWeb3 = (io) => {
    web3.eth.subscribe('newBlockHeaders', async (error, result) => {
        try {
            if (!error) {
                const {
                    number,
                    hash: blockHash,
                    miner,
                    difficulty,
                    nonce,
                    size,
                    gasUsed,
                    gasLimit,
                    baseFeePerGas,
                    extraData,
                    timestamp,
                } = result;

                const blockData = {
                    number,
                    blockHash,
                    miner,
                    difficulty,
                    nonce,
                    size,
                    gasUsed,
                    gasLimit,
                    baseFeePerGas,
                    extraData,
                    timestamp,
                };
                await BlockHeader.create(blockData);

                const txHashs = [];
                if (blockData.gasUsed !== 0) {
                    const txBlock = await web3.eth.getBlock(number);
                    txBlock.transactions.forEach((v) => {
                        txHashs.push(v);
                    });
                }
                for (const hash of txHashs) {
                    const tx = await web3.eth.getTransaction(hash);
                    const txData = {
                        txHash: tx.hash,
                        blockNum: tx.blockNumber,
                        timestamp: blockData.timestamp,
                        from: tx.from,
                        to: tx.to,
                        value: tx.value,
                        gas: tx.gas,
                        gasPrice: parseInt(tx.gasPrice),
                    };
                    await Transaction.create(txData);
                }
            }
        } catch (err) {
            console.log(err);
        }
    });

    io.on('connection', (socket) => {
        console.log('socket opened!!');
        web3.eth.subscribe('newBlockHeaders', async (error, result) => {
            try {
                if (!error) {
                    socket.emit('newBlock');

                    socket.emit('newTx');
                }
            } catch (err) {
                console.log(err);
            }
        });

        socket.on('disconnect', () => {
            console.log('disconnect');
        });
    });
};

module.exports = wsWeb3;
