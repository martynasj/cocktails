import angular from 'angular';

const app = angular.module('app');

const controller = function(cocktailApi) {

  this.cocktail = null;

  this.$routerOnActivate = (next, previous) => {
    let id = next.params.id;

    cocktailApi.getCocktailById(id).then( successResponse => {
      console.log(successResponse);
      this.cocktail = successResponse;
    }, errorResponse => {
      console.log(errorResponse);
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
        <p>{{ $ctrl.cocktail.description }}</p>

        <h2>Ingredients</h2>
        <ul class="list-group">
          <li class="list-group-item" ng-repeat="ingredient in $ctrl.cocktail.alcohol">
            <p>{{ ingredient.name }} - {{ ingredient.amount }} cl</p>
          </li>
        </ul>

        <h2>Preparation</h2>
        <ul class="list-group">
          <li class="list-group-item" ng-repeat="step in $ctrl.cocktail.preparation">
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