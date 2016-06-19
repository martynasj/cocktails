const Cocktail = require('../models/Cocktail');

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
          'alcohol.name': { $all: ingredients }
        };
        query = Object.assign({}, query, alcoholQuery);
      }
      if (queryParams.hasOwnProperty('other')) {
        const otherIngredients = _.concat([], queryParams.other);
        const otherQuery = {
          'other.name': { $all: otherIngredients }
        };
        query = Object.assign({}, query, otherQuery)
      }
    }

    Cocktail.find(query, (err, docs) => {
      if (err) return callback(err);
      callback(docs);
    });
  }

  static getById(id, callback) {

    Cocktail.find({_id: id}, (err, docs) => {
      if (err) return callback(err);
      callback(docs);
    });

  }

  static addCocktail(cocktailData, callback) {

    // Creates a new cocktail object to be inserted in th db and validates against the schema
    const cocktail = new Cocktail(cocktailData);

    cocktail.save((err, cocktail) => {
      if (err) callback(err);
      callback(cocktail);
    });

  }

}

module.exports = CocktailsController;