import angular from 'angular';
import { cocktails }  from '../data/data';

const app = angular.module('app');

app.service('cocktailApi', function($q, $http) {

  this.getCocktailById = (id) => {
    return $q((resolve, reject) => {

      $http.get(`http://localhost:3001/api/cocktails/${id}`).then(successResponse => {
        resolve(successResponse.data);
      }, errResponse => {
        reject(errResponse);
      });

    });
  };

  this.getAll = () => {
    return $q((resolve, reject) => {

      $http.get(`http://localhost:3001/api/cocktails`).then(successResponse => {
        resolve(successResponse);
      }, errResponse => {
        reject(errResponse);
      });

    });
  };

  this.addCocktail = (cocktailData, files) => {
    return $q((resolve, reject) => {

      const formData = new FormData();
      //if (files) {
      //  if (_.isArray(files)) {
      //    for (file of files) {
      //      formData.append('cocktail-images', file);
      //    }
      //  } else {
      //    formData.append('cocktail-images', files);
      //  }
      //}

      if (files) {
        for (let file of files) {
          formData.append('cocktail-images', file)
        }
      }

      //formData.append('cocktail-images', files[0]);

      _.forIn(cocktailData, (value, key) => {
        formData.append(key, value);
      });

      $http({
        method: 'POST',
        url: `http://localhost:3001/api/cocktails`,
        headers: {'Content-Type': undefined },  // if set to multiform, fails...
        data: formData
      }).then(successResponse => {
        resolve(successResponse);
      }, errResponse => {
        reject(errResponse);
      });

    });
  }



});