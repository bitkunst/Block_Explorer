const Web3 = require('web3');
const { BlockHeader } = require('./database/models');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:9005'));

const wsWeb3 = (io) => {
    web3.eth.subscribe('newBlockHeaders', async (error, result) => {
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

            try {
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
                const result = await BlockHeader.create(blockData);
            } catch (err) {
                console.log(err);
            }
        }
    });

    io.on('connection', (socket) => {
        console.log('socket opened!!');
        web3.eth.subscribe('newBlockHeaders', async (error, result) => {
            if (!error) {
                try {
                    socket.emit('newBlock');
                } catch (err) {
                    console.log(err);
                }
            }
        });

        socket.on('disconnect', () => {
            console.log('disconnect');
        });
    });
};

module.exports = wsWeb3;
