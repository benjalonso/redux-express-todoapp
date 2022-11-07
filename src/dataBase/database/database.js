// Aquí hacemos la conexión de sequelize con la base de datos
const Sequelize = require('sequelize');
const {DB_HOST,DB_NAME,DB_PASSWORD,DB_USER, DB_PORT} = require('../../config.js')


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    port: DB_PORT,
});

module.exports = sequelize;
