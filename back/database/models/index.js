require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const BlockHeader = require('./blockHeader')(sequelize, DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.BlockHeader = BlockHeader;

module.exports = db;
