import angular from 'angular';

const app = angular.module('app');

function controller() {

}

const template = `
  <div>
    <h1>Welcome to the Cocktail World</h1>
    <p>Mandatory assignment #2 by Martynas Jankauskas</p>
  </div>
`;

const homePage = app.component('homePage', {
  template,
  controller
});

export default homePage;





