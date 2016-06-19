import angular from 'angular';
import '../components/CocktailCard';
import { filterByProperty } from '../services/customFilters';
import { allSuggestions, allDrinks, otherIngredients } from '../data/alcohol_data';

const app = angular.module('app');

function controller(cocktailApi) {

  this.filter = filterByProperty;
  this.searchInput = '';
  this.queryTags = [];
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
    const matchedTags = _.filter(allSuggestions, (value) => {
      return value.includes(query);
    });
    return matchedTags;
  };

  this.tagClass = (tag) => {
    if (_.includes(allDrinks, tag.text)) return 'alcohol';
    return 'other'
  };

  this.onTagRemoved = (tag) => {
    _.remove(this.queryTags, (value) => value.text === tag.text );
    this.onTagsChanged();
  };

  this.onTagAdded = (tag) => {
    const type = _.includes(allDrinks, tag.text) ? 'alcohol' : 'other';
    this.queryTags.push({ text: tag.text, type });
    this.onTagsChanged();
  };

  this.onTagsChanged = () => {
    //console.log(...this.tags);
    //this.filterQuery = $.param(_.flatten(this.tags));
    this.filterQuery = '';
    if (this.queryTags.length > 0) {
      this.filterQuery = '?';
      _.forEach(this.queryTags, (value, index) => {
        if (index != 0) {
          this.filterQuery += '&';
        }
        const type = value.type;
        const query = `${type}=${value.text}`;
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
            <tags-input ng-model="$ctrl.tags"
            on-tag-added="$ctrl.onTagAdded($tag)"
            on-tag-removed="$ctrl.onTagRemoved($tag)"
            tag-class="$ctrl.tagClass($tag)"
            placeholder="Filter by ingredients...">
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