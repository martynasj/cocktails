import angular from 'angular';
import '../services/cocktailService';

const app = angular.module('app');

const controller = function(cocktailApi) {
  const ctrl = this;

  ctrl.cocktail = null;

  this.$routerOnActivate = function(next, previous) {
    let id = next.params.id;

    cocktailApi.getCocktailById(id).then( successResponse => {
      ctrl.cocktail = successResponse;
    }, errorResponse => {
      console.log(errorResponse);
      ctrl.cocktail = errorResponse;
    });

  };

};

const template = `
  <div>

    <div class="row">
      <div class="col-xs-4 col-xs-offset-4">
        <img ng-src="{{ $ctrl.cocktail.images[0] }}" alt="" class="img-responsive">
      </div>
    </div>

    <div class="row text-center">
      <div class="col-xs-12">
        <h1>{{ $ctrl.cocktail.name }}</h1>
        <p>{{ $ctrl.cocktail.description.brief }}</p>

        <h2>Ingredients</h2>
        <ul class="list-group">
          <li class="list-group-item" ng-repeat="ingredient in $ctrl.cocktail.ingredients.alcohol">
            <p>{{ ingredient.name }} - {{ ingredient.amount }} cl</p>
          </li>
        </ul>

        <h2>Preparation</h2>
        <ul class="list-group">
          <li class="list-group-item" ng-repeat="step in $ctrl.cocktail.preparation.steps">
            <p>{{ step }}</p>
          </li>
        </ul>



        <h3>Variations</h3>
      </div>
    </div>

  </div>
`;

const cocktailDetailsPage = app.component('cocktailDetailsPage', {
  controller,
  template,
  bindings: {}
});

export default cocktailDetailsPage;