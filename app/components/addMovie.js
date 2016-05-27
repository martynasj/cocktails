/**
 * Created by martynasjankauskas on 11/04/16.
 */
import app from '../app';

const movieData = {};

function controller() {

    // this assigns to local scope $ctrl as default
    this.validatedMovie = {};
    this.movie = {};

    this.save = function() {
        this.validatedMovie = this.movie;
        movieData.push(this.validatedMovie);
    };

    this.reset = function() {
        this.movie = {};
    }

}

const template = `
<div class="row">

  <div class="col s12">
    <h1>Add Movie</h1>
  </div>

    <form class="col s12">

      <div class="row">
      <div class="input-field col s12">
          <label for="movie_title">Movie Title</label>
            <input id="movie_title" class="validate" type="text" ng-model="$ctrl.movie.title" />
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <label for="movie_year">Year</label>
            <input id="movie_year" class="validate" type="text" ng-model="$ctrl.movie.year" />
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="movie_director">Director</label>
            <input id="movie_director" class="validate" type="text" ng-model="$ctrl.movie.director" />
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input id="movie_rating" class="validate" type="text" ng-model="$ctrl.movie.rating" />
            <label for="movie_rating" >Rating</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <label for="movie_website">Website</label>
            <input id="movie_website" class="validate" type="text" ng-model="$ctrl.movie.website" />
        </div>
      </div>

      <div class="row">
        <div class="row input-field">
            <input type="file" id="exampleInputFile">
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <button ng-click="$ctrl.save()" id="button1id" name="button1id" class="btn btn-success">Save</button>
            <button ng-click="$ctrl.reset()" id="button2id" name="button2id" class="btn">Clear</button>
        </div>
      </div>

    </form>

    <!-- For testing only -->
    <pre>movie = {{$ctrl.movie | json}}</pre>
    <pre>validatedMovie = {{$ctrl.validatedMovie | json}}</pre>

</div>
`;

export default app.component('addMovie', {
    template,
    controller
});