//sql 이용해서 시퀄라이즈 및 db 연동할 때 사용

/*const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/sequelize/dbConfig.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;*/