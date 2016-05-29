const tvController = require('./controllers/TvController');

const db = require('./db');
const episodes2 = db.collection('episodes2');
const tv = db.collection('tv');

tv.update({} , { $unset : { "_embedded": 1 }}, { multi: true }, (err, docs) => console.log('done') );