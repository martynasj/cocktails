import angular from 'angular';
import { types, allDrinks } from '../data/alcohol_data';
import glassTypes from '../data/glass_data';

const app = angular.module('app');

const controller = function (cocktailApi, Upload) {

  this.glassTypes = glassTypes;

  this.imageDivStyle = (imgUrl) => {
    return {
      'background-image': `url(${imgUrl})`,
      'background-size': 'cover',
      'background-position': 'center center',
      'background-repeat': 'no-repeat'
    }
  };

  this.cocktail = {
    name: 'Dark & Stormy',
    images: [
      "http://localhost:3001/images/cocktail/fb219cd0-3562-11e6-ae24-ed0001a4b9ff.jpeg",
      "http://localhost:3001/images/cocktail/02d7f280-3563-11e6-ae24-ed0001a4b9ff.jpeg"
    ],
    alcohol: [
      { name: 'Dark rum', amount: 6 }
    ],
    other: [
      { name: 'Ginger beer', amount: 10 },
      { name: 'Angostura', amount: 'dash' }
    ],
    garnish: [
      "Lime wedge"
    ],
    description: " In the US, the name Dark and Stormy is a trademark of Gosling Brothers Ltd of Bermuda. Gosling's claims there is only one recipe for a Dark 'N Stormy, but the NY Times reports that Gosling's has changed that recipe along with changing commercial relationships. Gosling's recipe does call for Gosling's Black Seal Rum.",
    glassType: 'highball',
    preparation: ['Fill glass with ice', 'Add dark rum', 'Top with ginger beer', 'Add a dash of angustura bitters', 'Garnish with a lime wedge']
  };

  this.input = {
    ingredient: {
      name: '',
      amount: ''
    },
    step: ''
  };

  this.addNewIngredient = () => {
    console.log(event);

    const { name, amount } = this.input.ingredient;

    // Find out if ingredient is alcoholic or other type
    if (_.includes(allDrinks, name)) {
      this.cocktail.alcohol.push({ name, amount });
    } else {
      this.cocktail.other.push({ name, amount })
    }

  };

  this.addStep = (e) => {
    if (e.which === 13) {
      this.cocktail.preparation.push(this.input.step);
      this.input.step = '';
    }
  };

  this.onImageSelect = (files) => {
    if (files && files.length) {
      for (let file of files) {
        // Executes once for every file
        Upload.upload({
          url: 'http://localhost:3001/api/cocktails/images',
          data: { 'cocktail-image': file }
        }).then(res => {
          this.cocktail.images.push(res.data.urls[0]);
        }, err => {
          console.log(err)
        }, evt => {
          console.log(evt);
        })
      }
    }
  };

  this.submitForm = () => {
    cocktailApi.addCocktail(this.cocktail).then(successResponse => {
      // If validation on the server side fails
      if (successResponse.data.errors) return console.log(successResponse.data);

      const id = successResponse.data._id;
      this.$router.navigate(['CocktailDetailsPage', { id }])
    }, errResponse => console.log(errResponse))
  };

};

const template = `
  <div class="container">

    <form>

      <div class="form-group">
        <label for="cocktail-name">Cocktail name</label>
        <input type="text" class="form-control" id="cocktail-name" ng-model="$ctrl.cocktail.name" placeholder="Ex. Dark & Stormy">
      </div>

      <div class="form-group">
        <label for="description">Brief Description</label>
        <textarea maxlength="250" rows="5" class="form-control" id="description" ng-model="$ctrl.cocktail.description" placeholder="Some description, max 250 characters"></textarea>
      </div>

      <!-- Image upload -->
      <button type="button" ngf-select="$ctrl.onImageSelect($files)" multiple="multiple">Select files for upload</button>

      <!-- Image preview -->
      <div class="row" ng-if="$ctrl.cocktail.images.length > 0">
        <div class="col-xs-3" ng-repeat="image in $ctrl.cocktail.images">
        <div class="thumbnail"><img ng-src="{{image}}"></div>

        </div>
      </div>

      <!-- Ingredients -->
      <h2>Ingredients</h2>
      <ul class="list-group">
        <li class="list-group-item" ng-repeat="alcohol in $ctrl.cocktail.alcohol">
        <span class="label label-warning">{{alcohol.amount}}</span>
        {{alcohol.name}}
        </li>
        <li class="list-group-item" ng-repeat="other in $ctrl.cocktail.other">
        <span class="label label-success">{{other.amount}}</span>
        {{other.name}}
        </li>
      </ul>

      <div class="form-inline nested-group">
        <input type="text" class="form-control" ng-model="$ctrl.input.ingredient.name" placeholder="Vodka">
        <input type="text" class="form-control" ng-model="$ctrl.input.ingredient.amount" placeholder="4 cl">
        <button class="btn btn-primary" type="button" ng-click="$ctrl.addNewIngredient($event)">Add</button>
      </div>

      <!-- Glass Type -->
      <h2>Glass Type</h2>
      <select class="form-control" name="" id="" ng-model="$ctrl.cocktail.glassType">
        <option ng-repeat="(key, value) in $ctrl.glassTypes" value="{{key}}">{{value}}</option>
      </select>

      <!-- Preparation -->
      <h2>Preparation</h2>
      <ol class="list-group">
        <li class="list-group-item" ng-repeat="step in $ctrl.cocktail.preparation">{{step}}</li>
        <input type="text" class="form-control" ng-model="$ctrl.input.step" ng-keypress="$ctrl.addStep($event)">
      </ol>

      <button type="button" ng-click="$ctrl.submitForm()" class="btn btn-default">Submit</button>

    </form>

    <!-- JSON preview, dev only -->
    <div class="row">
      <div class="col-xs-12"><pre>{{$ctrl.cocktail | json}}</pre></div>
    </div>


  </div>
`;

const AddCocktailPage = app.component('addCocktail', {
  controller,
  template,
  bindings: {
    $router: '<'
  }
});

export default AddCocktailPage;