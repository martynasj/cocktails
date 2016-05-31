import angular from 'angular';

const app = angular.module('app');

const controller = function () {

};

const template = `
  <div id="menu-item"
       ng-mouseenter="hover = true"
       ng-mouseleave="hover = false"
  >
    <div class="row">
          <div ng-if="hover" id="menu-item-toolbar"><button ng-click="$ctrl.onDelete($ctrl.index)">Delete</button></div>

          <div class="col-xs-3">
            <div id="cocktail-image" ng-style="{'background-image': 'url({{$ctrl.cocktail.images[0]}})'}">
            </div>
          </div>
          <div class="col-xs-9 text-center">
            <h3>{{$ctrl.cocktail.name}}</h3>
            <ul>
              <li ng-repeat="ingredient in $ctrl.cocktail.ingredients.alcohol">{{ ingredient.name }} - {{ ingredient.amount }}</li>
              <li ng-repeat="ingredient in $ctrl.cocktail.ingredients.other">{{ ingredient.name ? ingredient.name : ingredient }} - {{ ingredient.amount ? ingredient.amount : '' }}</li>
            </ul>
          </div>
        </div>
  </div>
`;

const menuItem = app.component('menuItem', {
  controller,
  template,
  bindings: {
    cocktail: '<',
    onDelete: '<',
    index: '<'
  }
});

export default menuItem;