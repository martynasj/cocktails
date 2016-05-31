import angular from 'angular';
import '../components/CocktailList';
import '../components/MenuCanvas';

const app = angular.module('app');

function controller(cocktailApi) {

  this.menu = {
    menuHeading: "Tonight's Selection",
    itemsOnMenu: []
  };

  this.onItemClick = (item) => {
    this.menu.itemsOnMenu.push(item);
  }

  this.$onInit = () => {
    cocktailApi.getAll().then(successResponse => {
      this.allCocktails = successResponse.data;
    }, errResponse => {
    });
  };

}

const template = `
        <div class="container-fluid" id="menu-maker-page">

          <div class="row">
            <div class="col-xs-12">
              <cocktail-list items="$ctrl.allCocktails" on-item-click="$ctrl.onItemClick"></cocktail-list>
            </div>
          </div>

          <menu-canvas menu="$ctrl.menu"></menu-canvas>

        </div>
`;

export default app.component('menuMakerPage', {
  template,
  controller
});



