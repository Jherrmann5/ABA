'use strict';

var ABAApp = angular.module('ABAApp', ['ui.bootstrap']);

ABAApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/tabs', {
        templateUrl: 'views/tabs.html',
        controller: 'TabsController'
      })
      .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'InventoryController'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);
