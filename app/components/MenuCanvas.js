import angular from 'angular';
import './MenuItem';

const app = angular.module('app');

const controller = function () {

  this.cocktails = this.menu.itemsOnMenu;
  this.menuHeading = this.menu.menuHeading;

  this.deleteItem = (index) => {
    this.cocktails.splice(index, 1);
  }

};

const template = `
  <div id="menu-canvas">

    <div class="row">
      <div class="col-xs-12">
        <span id="menu-heading">{{$ctrl.menuHeading}}</span>
      </div>
    </div>

    <div id="menu-item-area">
      <div ng-repeat="cocktail in $ctrl.cocktails track by $index">
        <menu-item cocktail="cocktail" on-delete="$ctrl.deleteItem" index="$index"></menu-item>
        <hr>
      </div>
    </div>

  </div>
`;

const menuCanvas = app.component('menuCanvas', {
  controller,
  template,
  bindings: {
    menu: '='
  }
});

export default menuCanvas;