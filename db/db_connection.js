const promise = require('bluebird');
const options = {
    promiseLib : promise
}
const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:uspumpdatabase@localhost:5432/wine_shop'; 
const db = pgp(connectionString);
db.connect();

module.exports = db;