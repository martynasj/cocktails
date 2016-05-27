import angular from 'angular';

const app = angular.module('app');

function controller(apiService, $sce) {

  const ctrl = this;

  this.$routerOnActivate = function(next, previous) {
    // Get the hero identified by the route parameter
    var routeId = next.params.id;
    apiService.getSeriesById(routeId).then(function success(result) {
      ctrl.tvSeries = result;
      ctrl.tvSeries.summarySafe = $sce.trustAsHtml(ctrl.tvSeries.summary);
    }, function error(result) {
      console.log(result);
    });
  }


};

const template = `
  <div class="container">
    <div class="row">
      <div class="col s12">
        <h1>{{$ctrl.tvSeries.name}}</h1>
        <ul>
          <li ng-repeat="genre in $ctrl.tvSeries.genres">{{genre}}</li>
        </ul>
        <p>Rating: {{$ctrl.tvSeries.rating.average}}</p>
        <p>{{$ctrl.tvSeries.network.name}}</p>
        <p>{{$ctrl.tvSeries.network.country.name}}</p>
        <div class="row">
          <div class="col s3">
            <img class="responsive-img" src="{{$ctrl.tvSeries.image.original}}" alt="">
          </div>
          <div class="col s9">
            <div class="video-container">
          <iframe  src="https://www.youtube.com/embed/EI0ib1NErqg" frameborder="0" allowfullscreen></iframe>
        </div>
          </div>
        </div>
        <div ng-bind-html="$ctrl.tvSeries.summarySafe"></div>
      </div>
    </div>

  </div>
`;

const tvSeriesPage = app.component('tvSeriesPage', {
  controller,
  template,
  bindings: {}
});

export default tvSeriesPage;