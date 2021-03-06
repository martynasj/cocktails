// This creates the app module
// All other components then build on this module

import angular from 'angular';
import ngComponentRouter from 'ngcomponentrouter';
import 'ng-file-upload';
import 'angular-carousel';
import 'angular-touch';
import 'ng-tags-input';

// Make the main app module and inject dependencies
const app = angular.module('app', ['ngComponentRouter', 'ngFileUpload', 'angular-carousel', 'ngTagsInput']);

app.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

export default app;
