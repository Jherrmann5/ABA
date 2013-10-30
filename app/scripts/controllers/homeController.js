'use strict';

ABAApp.controller('HomeController', ['$scope', 'Drinks', function ($scope, Drinks) {
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
	Drinks.updateDrinks();
	$scope.drinks = Drinks.getDrinks();

	$scope.updateDrinks = function() {
		Drinks.updateDrinks();
		$scope.drinks = Drinks.getDrinks();
	}
}]);
