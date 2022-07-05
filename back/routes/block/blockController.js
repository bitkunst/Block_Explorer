const { BlockHeader } = require('../../database/models');

const getInfo = async (req, res) => {
    try {
        const result = await BlockHeader.findAll({ order: [['number', 'DESC']] });
        res.json(result);
    } catch (err) {
        console.log(err);
    }
};

const getPrev = async (req, res) => {
    try {
        const result = await BlockHeader.findAll({ limit: 5, order: [['number', 'DESC']] });
        res.json(result);
    } catch (err) {
        console.log(err);
    }
};

const searchBlock = async (req, res) => {
    const { input } = req.body;

    try {
        const result = await BlockHeader.findOne({ where: { number: parseInt(input) } });

        if (result === undefined) {
            throw new Error('no data');
        }
        res.json(result.toJSON());
    } catch (err) {
        res.json({ error: 1 });
    }
};

module.exports = {
    getInfo,
    getPrev,
    searchBlock,
};
