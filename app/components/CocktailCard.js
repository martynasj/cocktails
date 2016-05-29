import angular from 'angular';
const app = angular.module('app');

function controller() {

  // destructure all bindings, like react's props
  const { cocktail } = this;

  this.id = cocktail._id;
  this.name = cocktail.name;
  this.mainImage = cocktail.images[0];
  console.log(cocktail.images);
  this.description = cocktail.description.history;


}

const template = `
    
    <div class="thumbnail">
      <img ng-src="{{ $ctrl.mainImage }}" alt="{{ $ctrl.name }}">
      <div class="caption">
        <h3>{{ $ctrl.name }}</h3>
        <p>{{ $ctrl.description }}</p>
        <a href="#" class="btn btn-primary" role="button">Edit</a>
        <a ng-link="['CocktailDetailsPage', {id: $ctrl.id} ]" class="btn btn-primary" role="button">View</a>
      </div>
    </div>
    
`;

export default app.component('cocktailCard', {
  template,
  controller,
  // can be accessed in the controller function as this.cocktail
  bindings: {
    cocktail: '<'
  }
})