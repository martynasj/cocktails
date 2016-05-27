import angular from 'angular';
import movieDetail from '../components/movieDetail';
import addMovie from '../components/addMovie';

const app = angular.module('app');

function controller() {
  this.movies = null;
}

const template = `
        <div id="movies-page" class="row">

            <div class="col s3 sidebar" >

                <ul class="collection">
                  <a ng-link="['AddMovie']" class="collection-item" ><i class="material-icons left">add</i>Add Movie</a>
                </ul>

                <ul class="collection">
                   <a ng-repeat="movie in $ctrl.movies" ng-link="['MovieDetail', {id: movie.id}]" class="collection-item">
                      {{movie.title}}
                    </a>
                  </ul>
            </div>

            <div class="col s9">
              <div class="container">
                <ng-outlet></ng-outlet>
              </div>
            </div>
        </div>

`;

const moviesPage = app.component('moviesPage', {
  template,
  controller,
  $routeConfig: [
    {path: '/', name: 'HomePage', component: 'homePage', useAsDefault: true},
    {path: '/add', name: 'AddMovie', component: 'addMovie'},
    {path: '/:id', name: 'MovieDetail', component: 'movieDetail'}
  ]
});

export default moviesPage;



