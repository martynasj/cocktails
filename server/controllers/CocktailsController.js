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
      if (queryParams.hasOwnProperty('alcohol')) {
        // Makes an array even if there's only 1 query param
        const ingredients = _.concat([], queryParams.alcohol);
        const alcoholQuery = {
          'ingredients.alcohol.name': { $all: ingredients }
        };
        query = Object.assign({}, query, alcoholQuery);
      }
      if (queryParams.hasOwnProperty('other')) {
        const otherIngredients = _.concat([], queryParams.other);
        const otherQuery = {
          'ingredients.other.name': { $all: otherIngredients }
        };
        query = Object.assign({}, query, otherQuery)
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