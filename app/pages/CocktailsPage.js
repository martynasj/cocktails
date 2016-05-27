import angular from 'angular';
import { cocktails } from '../data';
import '../components/CocktailCard';

const app = angular.module('app');



function controller(apiService) {

  this.$onInit = function() {
  };

  this.test = ['martis', 'martynas', 'domas', 'ignas'];

  // save 'this' reference
  const ctrl = this;
  this.searchInput = 'ma';

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
  console.log(cocktails);


  /**
   * Custom function to filter cocktail object by the name property
   * @param searchCriteria
   */
  this.myFilter = function(searchCriteria) {

    if (!searchCriteria) {
      return () => true;
    }

    const searchInput = searchCriteria ? searchCriteria.toLowerCase() : true;

    // this function is run once with every object of array to be filtered
    return function (cocktail) {
      const name = cocktail.name.toLowerCase();
      return name.startsWith(searchInput);
    };
  }

}

const template = `

              <div ng-if="$ctrl.dataLoading">Loading...</div>
              <div ng-if="$ctrl.error">No connection to the server</div>

              <div class="row">
                <div class="col-xs-12">
                  <form>
                    <div class="input-field">
                      <input id="search" type="search" ng-model="$ctrl.searchInput" required placeholder="Filter...">
                    </div>
                  </form>
                </div>
              </div>
              
              <!--<div ng-repeat="vardas in $ctrl.test | filter:$ctrl.searchInput">{{vardas}}</div>-->

              <div class="row">
                <div ng-repeat="cocktail in $ctrl.allCocktails | filter: $ctrl.myFilter($ctrl.searchInput) " class="col-xs-6">
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