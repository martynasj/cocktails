import angular from 'angular';
import './../components/topBar.js';
import './homePage';
import './CocktailsLayout';
import '../pages/MenuMakerPage';

const app = angular.module('app');

const template = `
    <div>
      <!-- Includes another component -->
      <top-bar></top-bar>
      <!-- Same as ng-view or ui-view from older router -->
      <ng-outlet></ng-outlet>
    </div>
`;

const MainLayout = app.component('mainLayout', {
  template,
  $routeConfig: [
    {path: '/', name: 'HomePage', component: 'homePage', useAsDefault: true},
    {path: '/cocktails/...', name: 'Cocktails', component: 'cocktailsLayout'},
    {path: '/cosktails/:id', name: 'CocktailDetailsPage', component: 'cocktailDetailsPage'},
    {path: '/menu-maker', name: 'MenuMaker', component: 'menuMakerPage'}
  ]
});

app.value('$routerRootComponent', 'mainLayout');

export default MainLayout;