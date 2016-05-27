import angular from 'angular';

const app = angular.module('app');

function controller(apiService) {
  const $ctrl = this;

  // filled with initial values for api testing
  $ctrl.tvSeries = {
    name: 'The Office',
    language: 'English',
    genres: [
      'Comedy'
    ],
    network: {
      country: {
        name: 'United States'
      }
    },
    rating: {
      average: 9
    },
    summary: 'A mockumentary on a group of typical office workers...'
  };

  $ctrl.addTv = function() {
    apiService.addTvSeries($ctrl.tvSeries).then(function success(result) {
      // redirect
      console.log(result);
    }, function error(error) {
      console.log(error);
    })
  }

}

const template = `
  <div>

    <div class="row">
      <div class="col s12">
        <h2>Add Tv Series</h2>
      </div>
    </div>

    <form id="tv-form" name="tvForm" novalidate>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="The Office" id="title" type="text" ng-model="$ctrl.tvSeries.name" required>
          <label class="active" for="title">Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="English" id="language" type="text" ng-model="$ctrl.tvSeries.language" required>
          <label class="active" for="language">Language</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Comedy" id="genre" type="text" ng-model="$ctrl.tvSeries.genres[0]" required>
          <label class="active" for="genre">Genre</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="United States" id="country" type="text" ng-model="$ctrl.tvSeries.network.country.name">
          <label class="active" for="country">Country</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="9" id="rating" type="number" ng-model="$ctrl.tvSeries.rating.average" min="0" max="10">
          <label class="active" for="rating">Rating</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="summary" class="materialize-textarea" name="summary" ng-model="$ctrl.tvSeries.summary" placeholder="A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium. Based on the hit BBC series."></textarea>
          <label class="active" for="description">Summary</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" ng-class="{ 'disabled': tvForm.$invalid }" ng-click="$ctrl.addTv()" type="submit" name="action">Submit
        <i class="material-icons right">send</i>
      </button>
    </form>

    <pre>{{$ctrl.tvSeries | json}}</pre>

  </div>
`;

const addTvPage = app.component('addTvPage', {
  controller,
  template,
  bindings: {

  }
});

export default addTvPage;