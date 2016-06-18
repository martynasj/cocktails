import angular from 'angular';
const app = angular.module('app');

function controller() {

  // destructure all bindings, like react's props
  const { cocktail } = this;

  this.id = cocktail._id;
  this.name = cocktail.name;
  this.mainImage = cocktail.images[0];
  console.log(cocktail.ingredients.alcohol);
  console.log(cocktail.ingredients.other);
  this.ingredients = _.concat(cocktail.ingredients.alcohol, cocktail.ingredients.other);
  this.description = cocktail.description.history;


}

const template = `

    <a ng-link="['CocktailDetailsPage', {id: $ctrl.id} ]">
      <div class="cocktail-card">
        <div class="thumbnail">
          <img ng-src="{{ $ctrl.mainImage }}" alt="{{ $ctrl.name }}">
          <div class="caption">
            <h3>{{ $ctrl.name }}</h3>
            <ul>
              <li ng-repeat="ingredient in $ctrl.ingredients">{{ingredient.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </a>

`;

export default app.component('cocktailCard', {
  template,
  controller,
  // can be accessed in the controller function as this.cocktail
  bindings: {
    cocktail: '<'
  }
})