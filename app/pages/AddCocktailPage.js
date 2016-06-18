import angular from 'angular';
import { types, allDrinks } from '../data/alcohol_data';
import glassTypes from '../data/glass_data';

const app = angular.module('app');

const controller = function (cocktailApi) {

  this.glassTypes = glassTypes;

  this.cocktail = {
    name: 'Dark & Stormy',
    ingredients: {
      alcohol: [
        { name: 'Dark rum', amount: 6 }
      ],
      other: [
        { name: 'Ginger beer', amount: 10 },
        { name: 'Angostura', amount: 'dash' }
      ],
      garnish: [
        "Lime wedge"
      ]
    },
    description: {
      brief: " In the US, the name Dark and Stormy is a trademark of Gosling Brothers Ltd of Bermuda. Gosling's claims there is only one recipe for a Dark 'N Stormy, but the NY Times reports that Gosling's has changed that recipe along with changing commercial relationships. Gosling's recipe does call for Gosling's Black Seal Rum."
    },
    glassType: 'highball',
    preparation: {
      steps: [ 'Fill glass with ice', 'Add dark rum', 'Top with ginger beer', 'Add a dash of angustura bitters', 'Garnish with a lime wedge' ]
    }
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

    if (_.includes(allDrinks, name)) {
      this.cocktail.ingredients.alcohol.push({name, amount});
    } else {
      this.cocktail.ingredients.other.push({name, amount})
    }

  };

  this.addStep = (e) => {
    if (e.which === 13) {
      this.cocktail.preparation.steps.push(this.input.step);
      this.input.step = '';
    }
  };

  this.submitForm = () => {
    cocktailApi.addCocktail(this.cocktail, this.fileInput).then( successResponse => {
      console.log('inserted successfully');
      console.log(successResponse);
    }, errResponse => console.log(errResponse) )
  };

};

const template = `
  <div>

    <form>

      <div class="form-group">
        <label for="cocktail-name">Cocktail name</label>
        <input type="text" class="form-control" id="cocktail-name" ng-model="$ctrl.cocktail.name" placeholder="Ex. Dark & Stormy">
      </div>

      <div class="form-group">
        <label for="description">Brief Description</label>
        <textarea maxlength="250" rows="5" class="form-control" id="description" ng-model="$ctrl.cocktail.description.brief" placeholder="Some description, max 250 characters"></textarea>
      </div>

      <!-- Image upload -->
      <div class="form-group">
        <label for="exampleInputFile">Photos</label>
        <input type="file" multiple file-model="$ctrl.fileInput" name="cocktail-images" id="photos">
        <p class="help-block">You can attach more than one picture</p>
        {{ $ctrl.fileModel }}
      </div>

      <!-- Ingredients -->
      <h2>Ingredients</h2>
      <ul class="list-group">
        <li class="list-group-item" ng-repeat="alcohol in $ctrl.cocktail.ingredients.alcohol">
        <span class="label label-warning">{{alcohol.amount}}</span>
        {{alcohol.name}}
        </li>
        <li class="list-group-item" ng-repeat="other in $ctrl.cocktail.ingredients.other">
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
        <li class="list-group-item" ng-repeat="step in $ctrl.cocktail.preparation.steps">{{step}}</li>
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
  bindings: {}
});

export default AddCocktailPage;