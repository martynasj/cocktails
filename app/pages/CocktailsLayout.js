import angular from 'angular';
import './CocktailsPage';

const app = angular.module('app');

function controller($http, apiService) {

}

const template = `
        <div id="cocktails-layout" class="container">

          <div class="row">
            <div class="col-xs-12">
              <ng-outlet></ng-outlet>
            </div>
          </div>
        </div>
`;

export default app.component('cocktailsLayout', {
  template,
  controller,
  $routeConfig: [
    {path: '/', name: 'CocktailsPage', component: 'cocktailsPage', useAsDefault: true},
    {path: '/:id', name: 'Cocktail', component: 'cocktail'},
    {path: '/add', name: 'AddCoctkail', component: 'addCocktail'}
  ]
});



