const mongojs = require('mongojs');

const db = require('../db');
const cocktails = db.collection('cocktails');

class CocktailsController {

  static getAll(ingredients, callback) {

    const query = {
      'ingredients.alcohol': { $elemMatch: { name: ingredients } }
    }

    cocktails.find(query, (err, docs) => {
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

  static addCocktail(cocktail, callback) {
    cocktails.insert(cocktail, (err, documents) => {
      if (err) return callback(err);
      callback(documents._id);
    })
  }

}

module.exports = CocktailsController;