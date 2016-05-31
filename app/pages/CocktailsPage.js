import angular from 'angular';
import '../components/CocktailCard';

const app = angular.module('app');

function controller(cocktailApi) {

  // save 'this' reference
  const ctrl = this;

  ctrl.dataLoading = false;
  ctrl.error = false;

  this.$onInit = function () {
    cocktailApi.getAll().then(successResponse => {
      ctrl.allCocktails = successResponse.data;
      ctrl.dataLoading = false;
    }, errResponse => {
      ctrl.error = true;
      ctrl.dataLoading = false;
    });
  };

}

const template = `

    <div ng-if="$ctrl.dataLoading">Loading...</div>
    <div ng-if="$ctrl.error">No connection to the server</div>

    <div class="row">
      <div class="col-xs-6 col-xs-offset-3">

      </div>
    </div>

`;



export default app.component('cocktailsPage', {
  template,
  controller,
  bindings: {

  }

})