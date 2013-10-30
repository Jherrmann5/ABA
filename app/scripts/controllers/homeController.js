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
    Drinks.updateDrinks();
    $scope.drinks = Drinks.getDrinks();
    alert("updated");

    $scope.updateDrinks = function() {
    	Drinks.updateDrinks();
    	$scope.drinks = Drinks.getDrinks();
    }
  }]);
