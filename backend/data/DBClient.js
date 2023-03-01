const pg = require('pg');

const client = new pg.Client({
    user: 'une',
    host: 'localhost',
    database: 'login',
    password: 'llsyou',
    port: 5432
})

client.connect()

module.exports = client