import app from '../app';

app.service('apiService', function($q, $http) {

  this.getAllSeries = function () {
    return $q(function (resolve, reject) {
      $http({
        method: 'GET',
        url: 'http://localhost:3001/api/tv'
      }).then(function successCallback(response) {
        resolve(response.data);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        reject(response);
      })
    });
  };

  this.getSeriesById = function(id) {
    return $q(function(resolve, reject) {
      $http.get(`http://localhost:3001/api/tv/${id}`).then(function success(response) {
        resolve(response.data);
      }, function error(response) {
        reject(response);
      });
    });
  };

  this.addTvSeries = function(tvSeries) {
    return $q(function(resolve, reject) {
      $http.post(`http://localhost:3001/api/tv/add`, tvSeries).then(function success(response) {
        resolve(response.data);
      }, function error(response) {
        reject(response);
      });
    });
  };

});

const apiService = {

  getName: function() {
    return 'martynas';
  },


}

export default apiService;
/*
;*/