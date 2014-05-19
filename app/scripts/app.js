'use strict';

angular.module('toDoListApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.sortable'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
