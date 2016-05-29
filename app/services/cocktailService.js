import angular from 'angular';
import { cocktails }  from '../data/data';

const app = angular.module('app');

app.service('cocktailApi', function($q) {

  this.getCocktailById = (id) => {
    return $q( (resolve, reject) => {

      setTimeout( () => {
        for (let cocktail of cocktails) {
          if (cocktail._id === id) {
            resolve(cocktail);
          }
        }

        reject({error: 'cocktail not found'})
      }, 500);


    });
  }

});