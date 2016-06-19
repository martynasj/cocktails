const mongoose = require('mongoose');

const host = 'localhost';
const database = 'cocktails';
const port = 27017;

mongoose.connect(host, database, port);

const db = mongoose.connection;

// Optional for getting notified when the connection is open
// All code for db operations in theory should be inside this function
db.once('open', () => {
  console.log('success');
});

module.exports = db;