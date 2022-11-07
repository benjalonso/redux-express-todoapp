// Aquí hacemos la conexión de sequelize con la base de datos
const Sequelize = require('sequelize');
const {DB_DIALECT,DB_HOST,DB_NAME,DB_PASSWORD,DB_USER} = require('../../config.js')


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
});

module.exports = sequelize;
