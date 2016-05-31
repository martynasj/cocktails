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
  }



});