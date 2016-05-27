import angular from 'angular';
import { cocktails } from '../data';
import '../components/CocktailCard';

const app = angular.module('app');


function controller(apiService) {

  this.$onInit = function() {
  };

  // save 'this' reference
  const ctrl = this;

  ctrl.dataLoading = false;
  ctrl.error = false;

  // this.$onInit = function() {
  //   apiService.getAllSeries().then(function success(result) {
  //     ctrl.allSeries = result;
  //     ctrl.dataLoading = false;
  //   }, function error(reason) {
  //     ctrl.error = true;
  //     ctrl.dataLoading = false;
  //   });
  // };

  ctrl.allCocktails = cocktails;

}

const template = `

              <div ng-if="$ctrl.dataLoading">Loading...</div>
              <div ng-if="$ctrl.error">No connection to the server</div>

              <div class="row">
                <div class="col-xs-12">
                  <form>
                    <div class="input-field">
                      <input id="search" type="search" required placeholder="Filter...">
                    </div>
                  </form>
                </div>
              </div>

              <div class="row">
                <div ng-repeat="cocktail in $ctrl.allCocktails track by $index" class="col-xs-6">
                  <cocktail-card cocktail="cocktail"></cocktail-card>
                </div>
              </div>
`;



export default app.component('cocktailsPage', {
  template,
  controller,
  bindings: {

  },
  $routeConfig: [
    {path: '/', name: 'CocktailsPage', component: 'cocktailsPage', useAsDefault: true},
    {path: '/:id', name: 'Cocktail', component: 'cocktail'},
    {path: '/add', name: 'AddCoctkail', component: 'addCocktail'}
  ]

})