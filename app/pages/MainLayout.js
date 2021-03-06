import angular from 'angular';
import './../components/topBar.js';

// Route components
import './homePage';
import '../pages/MenuMakerPage';
import '../pages/AddCocktailPage';
import '../pages/CocktailsPage';
import '../pages/CocktailDetailsPage';

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

    {path: '/cocktails/', name: 'Cocktails', component: 'cocktailsPage'},
    {path: '/cocktails/add', name: 'AddCocktail', component: 'addCocktail'},
    {path: '/cocktails/:id', name: 'CocktailDetailsPage', component: 'cocktailDetailsPage'},

    {path: '/menu-maker', name: 'MenuMaker', component: 'menuMakerPage'}
  ]
});

app.value('$routerRootComponent', 'mainLayout');

export default MainLayout;