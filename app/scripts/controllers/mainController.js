'use strict';

angular.module('ABAApp')
  .controller('MainController', function ($scope) {
    $scope.pages = [
      'Home',
      'Tabs',
      'Inventory',
      'Settings',
    ];
    $scope.pages.index = '1';
    $scope.pages.active = function() {
      return $scope.pages[$scope.pages.index];
    }
    $scope.isActive = function(activePage) {
      return activePage === $scope.pages.active();
    }
  });
