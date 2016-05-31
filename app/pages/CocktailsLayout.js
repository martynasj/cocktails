import angular from 'angular';
import './CocktailsPage';
import './CocktailDetailsPage';

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
    {path: '/add', name: 'AddCoctkail', component: 'addCocktail'}
  ]
});



