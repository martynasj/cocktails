/**
 * Created by martynasjankauskas on 11/04/16.
 */
import app from '../app';

function controller() {

  const $ctrl = this;
  $ctrl.movieData = null;

    this.$routerOnActivate = function(next, previous) {
    // Get the hero identified by the route parameter
    var routeId = next.params.id;

    for (const movie of $ctrl.movieData) {
      if (movie.id === routeId) {
        $ctrl.movie = JSON.stringify(movie, null, 2);
      }
    }

  };
}

const template = `
  <div>
    <pre>{{$ctrl.movie}}</pre>
  </div>
`;

const movieDetail = app.component('movieDetail', {
  template,
  controller
});

export default movieDetail;