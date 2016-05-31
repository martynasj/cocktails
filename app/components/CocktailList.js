import angular from 'angular';
import { filterByProperty } from '../services/customFilters';

const app = angular.module('app');

const controller = function () {

  this.filter = filterByProperty;
  this.searchInput = '';

};

const template = `
  <div>

    <div class="row">
      <div class="col-xs-12">
        <div class="form-group">
          <input id="search" autocomplete="off" class="form-control" ng-model="$ctrl.searchInput" placeholder="Filter...">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <div class="list-group">
          <a class="list-group-item"
          ng-repeat="item in $ctrl.items | filter: $ctrl.filter('name', $ctrl.searchInput)"
          ng-click="$ctrl.onItemClick(item)"
          >
            <p>{{ item.name }}</p>
          </a>
       </div>
      </div>
    </div>

  </div>
`;

const cocktailList = app.component('cocktailList', {
  controller,
  template,
  bindings: {
    items: '<',
    onItemClick: '<'
  }
});

export default cocktailList;