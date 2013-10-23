'use strict';

angular.module('ABAApp')
  .controller('HomeController', ['$scope', function ($scope) {
    $scope.drinks = [
    	'Rum & Coke',
    	'Whiskey Sour',
    	'Gin & Tonic',
    	'Whiskey on the Rocks'
    ];
  }]);
