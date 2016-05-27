import app from '../app';

function controller() {

  // destructure all bindings, like react's props
  const { cocktail } = this;

  this.name = cocktail.names[0];
  this.mainImage = cocktail.images[1];
  console.log(cocktail.images);
  this.description = cocktail.description.history;


}

const template = `
    
    <div class="thumbnail">
      <img ng-src="{{ $ctrl.mainImage }}" alt="negroni">
      <div class="caption">
        <h3>{{ $ctrl.name }}</h3>
        <p>{{ $ctrl.description }}</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
    
`

export default app.component('cocktailCard', {
  template,
  controller,
  // can be accessed in the controller function as this.cocktail
  bindings: {
    cocktail: '<'
  }
})