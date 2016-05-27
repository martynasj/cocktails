import angular from 'angular';
import './tvList';
import './tvSeriesPage';

const app = angular.module('app');

function controller($http, apiService) {

}

const template = `
        <div  id="tv-page" class="container">

          <div class="row">
            <div class="col s12">
              <h1>Tv Page</h1>
            </div>
          </div>

          <div class="row">
            <div class="col s12">
              <ng-outlet></ng-outlet>
            </div>
          </div>
        </div>
`;

const tvPage = app.component('tvPage', {
  template,
  controller,
  $routeConfig: [
    {path: '/', name: 'TvList', component: 'tvList', useAsDefault: true},
    {path: '/:id', name: 'TvSeriesPage', component: 'tvSeriesPage'},
    {path: '/add', name: 'AddTv', component: 'addTvPage'}
  ]
});

export default tvPage;



