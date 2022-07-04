module.exports = (sequelize, DataTypes) => {
    const BlockHeader = sequelize.define(
        'BlockHeader',
        {
            number: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            blockHash: {
                type: DataTypes.STRING(),
                allowNull: false,
            },
            miner: {
                type: DataTypes.STRING(),
                allowNull: false,
            },
            difficulty: {
                type: DataTypes.STRING(),
                allowNull: false,
            },
            nonce: {
                type: DataTypes.STRING(),
                allowNull: false,
            },
            size: {
                type: DataTypes.STRING(),
                allowNull: true,
            },
            gasUsed: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            gasLimit: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            baseFeePerGas: {
                type: DataTypes.FLOAT,
                allowNull: true,
            },
            extraData: {
                type: DataTypes.STRING(),
                allowNull: false,
            },
            timestamp: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'BlockHeader',
            modelName: 'BlockHeader',
            timestamps: false,
            charset: 'utf8mb4',
        },
    );
    return BlockHeader;
};
