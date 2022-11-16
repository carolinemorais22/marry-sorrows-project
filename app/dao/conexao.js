const { Pool } = require('pg');

/**
 * Conexão local - via pool de conexões
 */
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd-dw2-128',
    password: 'matematica8',
    port: 2510
})

/**
 * Conexão heroku - via pool de conexões
 */
/* const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}) */

module.exports = pool;