const mongojs = require('mongojs');

const config = require('../serverConfig');
const db = require('../db');
const cocktails = db.collection('cocktails');

class CocktailsController {

  static getAll(queryParams, callback) {

    // default query, find all docs if no query parameters are sent
    let query = { };

    // If there are any query parameters:
    if (queryParams) {
      if (queryParams.hasOwnProperty('ingredients')) {
        const ingredients = queryParams.ingredients;
        query = { 'ingredients.alcohol.name': { $all: ['Gin', 'Campari'] } }
      }
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

  static addCocktail(cocktailData, callback) {

    cocktails.insert(cocktailData, (err, documents) => {
      if (err) return callback(err);
      callback({ _id: documents._id });
    })

  }

}

module.exports = CocktailsController;