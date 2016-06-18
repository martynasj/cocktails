import angular from 'angular';
import '../components/CocktailCard';

const app = angular.module('app');

function controller(cocktailApi) {

  this.dataLoading = false;
  this.error = false;

  this.$onInit = () => {
    cocktailApi.getAll().then(successResponse => {
      this.allCocktails = successResponse.data;
      this.dataLoading = false;
    }, errResponse => {
      this.error = true;
      this.dataLoading = false;
    });
  };

}

const template = `

    <div ng-if="$ctrl.dataLoading">Loading...</div>
    <div ng-if="$ctrl.error">No connection to the server</div>

    <div class="row">
      <div class="col-xs-3">
        <cocktail-card cocktail=""></cocktail-card>
      </div>
    </div>

`;



export default app.component('cocktailsPage', {
  template,
  controller,
  bindings: {

  }

})