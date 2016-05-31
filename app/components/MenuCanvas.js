import angular from 'angular';

const app = angular.module('app');

const controller = function () {


};

const template = `
  <div>

      <div class="row" ng-repeat="cocktail in $ctrl.cocktails">
        <div class="col-xs-3">
          <img ng-src="{{cocktail.images[0]}}" alt="" class="img-responsive img-rounded">
        </div>
        <div class="col-xs-9 text-center">
          <h3 class="cocktail-name">{{cocktail.name}}</h3>
          <ul>
            <li ng-repeat="ingredient in cocktail.ingredients.alcohol">{{ ingredient.name }} - {{ ingredient.amount }}</li>
            <li ng-repeat="ingredient in cocktail.ingredients.other">{{ ingredient.name ? ingredient.name : ingredient }} - {{ ingredient.amount ? ingredient.amount : '' }}</li>
          </ul>
        </div>
      </div>

  </div>
`;

const menuCanvas = app.component('menuCanvas', {
  controller,
  template,
  bindings: {
    cocktails: '='
  }
});

export default menuCanvas;