const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:9005'));

const { Transaction } = require('../../database/models');

const getInfo = async (req, res) => {
    try {
        const result = await Transaction.findAll({ order: [['blockNum', 'DESC']] });

        res.json(result);
    } catch (err) {
        console.log(err);
    }
};

const getPrev = async (req, res) => {
    try {
        const result = await Transaction.findAll({ limit: 5, order: [['blockNum', 'DESC']] });

        modifiedResult = [];
        result.reduce((acc, v) => {
            const data = v.toJSON();
            data.value = web3.utils.fromWei(data.value, 'ether');

            modifiedResult.push(data);
            return acc;
        }, modifiedResult);

        res.json(modifiedResult);
    } catch (err) {
        console.log(err);
    }
};

const searchAddress = async (req, res) => {
    const { input } = req.body;
    try {
        const resultFrom = await Transaction.findAll({ where: { from: input } });
        const resultTo = await Transaction.findAll({ where: { to: input } });

        if (resultFrom[0] === undefined && resultTo[0] === undefined) {
            throw new Error('no data');
        }
        const result = {
            resultFrom,
            resultTo,
        };

        res.json(result);
    } catch (err) {
        res.json({ error: 1 });
    }
};

const searchHash = async (req, res) => {
    const { input } = req.body;
    try {
        const result = await Transaction.findOne({ where: { txHash: input } });
        if (result === undefined) {
            throw new Error('no data');
        }
        const data = result.toJSON();
        data.value = web3.utils.fromWei(data.value, 'ether');

        res.json(data);
    } catch (err) {
        res.json({ error: 1 });
    }
};

module.exports = {
    getInfo,
    getPrev,
    searchAddress,
    searchHash,
};
