const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');

const Todo = sequelize.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    expiration: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        
    }

},{timestamps: false});

module.exports = Todo;