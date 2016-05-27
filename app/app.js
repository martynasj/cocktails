// This creates the app module
// All other components then build on this module

import angular from 'angular';
import ngComponentRouter from 'ngcomponentrouter';

const app = angular.module('app', ['ngComponentRouter']);

app.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

export default app;
