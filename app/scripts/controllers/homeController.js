'use strict';

angular.module('ABAApp')
  .controller('HomeController', ['$scope', function ($scope) {
    $scope.drinks = [
    	'Rum & Coke',
    	'Whiskey Sour',
    	'Gin & Tonic',
    	'Whiskey on the Rocks'
    ];
    $scope.queues =[
    	'Pouring',
    	'On Deck',
    	'In the Hole',
    	'If we are lucky',
    	'#drunk',
    	'blackout'
    ];
  }]);

ABAApp.controller('HomeController', ['$scope', 'Drinks', function ($scope, Drinks) {
    $scope.drinks = Drinks.getDrinks();
  }]);
