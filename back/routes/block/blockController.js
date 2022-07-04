const { BlockHeader } = require('../../database/models');

const getInfo = async (req, res) => {
    try {
        const result = await BlockHeader.findAll({ order: [['number', 'DESC']] });
        res.json(result);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getInfo,
};
