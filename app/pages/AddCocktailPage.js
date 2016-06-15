import angular from 'angular';
import { types, allDrinks } from '../data/alcohol_data';
import glassTypes from '../data/glass_data';

const app = angular.module('app');

const controller = function () {

  this.glassTypes = glassTypes;

  this.cocktail = {
    name: 'Mojito',
    ingredients: {
      alcohol: [
        { name: 'Vodka', amount: 4 }
      ],
      other: [
        { name: 'Lime', amount: 2 }
      ],
      garnish: [
        "Orange peel"
      ]
    },
    description: {
      brief: 'Just write some interesting facts about this cocktail...'
    },
    glassType: 'highball',
    preparation: {
      steps: [ 'First step', 'Second step' ]
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

  }

  this.addStep = (e) => {
    if (e.which === 13) {
      this.cocktail.preparation.steps.push(this.input.step);
      this.input.step = '';
    }
  }

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

      <div class="form-group">
        <label for="exampleInputFile">Photos</label>
        <input type="file" multiple id="photos">
        <p class="help-block">You can attach more than one picture</p>
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

      <button type="submit" class="btn btn-default">Submit</button>

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