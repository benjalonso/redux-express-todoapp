// Aquí hacemos la conexión de sequelize con la base de datos
const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
