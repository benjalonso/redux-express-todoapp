

const PORT = process.env.PORT || 3110

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'postgres'
const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
const DB_NAME = process.env.DB_NAME || 'postgres'
const DB_DIALECT = process.env.DB_DIALECT || 'postgres'

module.exports = {DB_DIALECT,DB_HOST,DB_NAME,DB_PASSWORD,DB_USER,PORT}
