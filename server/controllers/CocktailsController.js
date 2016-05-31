const mongojs = require('mongojs');

const db = require('../db');
const cocktails = db.collection('cocktails');

class CocktailsController {

  static getAll(callback) {
    cocktails.find((err, docs) => {
      if (err) {
        throw new Error(err);
      } else {
        callback(docs);
      }
    });
  }

  static getById(id, callback) {
    cocktails.findOne({_id: mongojs.ObjectId(id)}, (err, docs) => {
      if (err) {
        throw new Error(err);
      } else {
        callback(docs);
      }
    })
  }

}

module.exports = CocktailsController;