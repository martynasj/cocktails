import angular from 'angular';
import '../components/CocktailList';
import '../components/MenuCanvas';

const app = angular.module('app');

function controller(cocktailApi) {

  this.itemsOnMenu = [];

  this.onItemClick = (item) => {
    this.itemsOnMenu.push(item);
    console.log(this.itemsOnMenu);
  }

  this.$onInit = () => {
    cocktailApi.getAll().then(successResponse => {
      this.allCocktails = successResponse.data;
    }, errResponse => {
    });
  };

}

const template = `
        <div class="container-fluid">

          <div class="row">
            <div class="col-xs-4">
              <cocktail-list items="$ctrl.allCocktails" on-item-click="$ctrl.onItemClick"></cocktail-list>
            </div>

            <div class="col-xs-7 col-xs-offset-1">
              <menu-canvas cocktails="$ctrl.itemsOnMenu"></menu-canvas>
            </div>
          </div>

        </div>
`;

export default app.component('menuMakerPage', {
  template,
  controller
});



