const mongojs = require('mongojs');

const url = 'mongodb://localhost:27017/cocktails';

// connection to specific database
const db = mongojs(url);
module.exports =  db;