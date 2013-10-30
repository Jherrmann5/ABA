'use strict';

ABAApp.factory('Drinks', ['$http', function($http) {
	var drinksFactory = {};

	drinksFactory.drinks = [
		{
			name: 'Rum & Coke',
			price: 3.50
		},
		{
			name: 'Gin & Tonic',
			price: 3.75
		},
		{
			name: 'Whiskey on the Rocks',
			price: 4.25
		}
	];

	drinksFactory.updateDrinks = function() {
		$http({
			url: 'scripts/backend/drinks.php',
			method: 'GET'
		})
			.success(function(data, status, headers, config) {
				drinksFactory.drinks = data;
			})
			.error(function(data, status, headers, config) {
				alert('An error has occured.');
			});
	};

	drinksFactory.getDrinks = function() {
		return drinksFactory.drinks;
	};

	return drinksFactory;
}]);