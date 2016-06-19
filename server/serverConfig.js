const port = 3001;
const imageStorageUrl = 'http://localhost:3001';

// Make lodash library globally available
global._ = require('lodash');

module.exports = { port, imageStorageUrl };