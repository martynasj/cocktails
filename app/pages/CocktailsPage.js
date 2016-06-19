import angular from 'angular';
import '../components/CocktailCard';
import { filterByProperty } from '../services/customFilters';

const app = angular.module('app');

function controller(cocktailApi) {

  this.filter = filterByProperty;
  this.searchInput = '';
  this.tags = [ ];
  this.filterQuery = '';

  this.dataLoading = false;
  this.error = false;

  this.$onInit = () => {
    cocktailApi.getAll().then(successResponse => {
      this.allCocktails = successResponse.data;
      this.dataLoading = false;
      console.log(this.allCocktails);
    }, errResponse => {
      this.error = true;
      this.dataLoading = false;
    });
  };

  this.loadTagSuggestions = (query) => {
    const allPossibleTags = [ 'gin', 'martini', 'vermouth' ];
    const matchedTags = _.filter(allPossibleTags, (value) => {
      return value.includes(query);
    });
    return matchedTags;
  }

  this.onTagsChanged = () => {
    //console.log(...this.tags);
    //this.filterQuery = $.param(_.flatten(this.tags));
    this.filterQuery = '';
    if (this.tags.length > 0) {
      this.filterQuery = '?';
      _.forEach(this.tags, (value, index) => {
        if (index != 0) {
          this.filterQuery += '&';
        }
        const query = `ingredients=${value.text}`;
        this.filterQuery += query;
      });
    }
  }

}

const template = `

    <div class="container">
      <div ng-if="$ctrl.dataLoading">Loading...</div>
      <div ng-if="$ctrl.error">No connection to the server</div>

      <!-- Filter -->
      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <tags-input ng-model="$ctrl.tags" on-tag-added="$ctrl.onTagsChanged()" on-tag-removed="$ctrl.onTagsChanged()" placeholder="Filter by ingredients...">
              <auto-complete source="$ctrl.loadTagSuggestions($query)" min-length="1"></auto-complete>
            </tags-input>
          </div>
        </div>
      </div>



      <!-- Dev preview -->
      <pre>filter: {{$ctrl.filterQuery}}</pre>

      <!-- Filtered list of cocktail cards -->
      <div class="row">
        <div class="col-xs-3" ng-repeat="cocktail in $ctrl.allCocktails | filter: $ctrl.filter('name', $ctrl.searchInput)">
          <cocktail-card cocktail="cocktail"></cocktail-card>
        </div>
      </div>

      <div class="row">

      </div>
    </div>

`;



export default app.component('cocktailsPage', {
  template,
  controller,
  bindings: {

  }

})