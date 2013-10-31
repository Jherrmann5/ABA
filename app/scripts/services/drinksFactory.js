'use strict';

ABAApp.factory('Drinks', function() {
	var drinksFactory = {};

	drinksFactory.drinks = [
		{
			name: 'Rum & Coke',
			price: 3.50,
			ing1: {
				name: 'Rum',
				amt: 1
			},
			ing2: {
				name: 'Coke',
				amt: 3
			}
		},
		{
			name: 'Gin & Tonic',
			price: 3.75,
			ing1: {
				name: 'Gin',
				amt: 1
			},
			ing2: {
				name: 'Tonic',
				amt: 3
			}
		},
		{
			name: 'Rum on the Rocks',
			price: 4.25,
			ing1: {
				name: 'Whiskey',
				amt: 1
			},
			ing2: {
				name: 'None',
				amt: 0
			}
		},
		{
			name: 'Coke',
			price: 4.25,
			ing1: {
				name: 'Whiskey',
				amt: 1
			},
			ing2: {
				name: 'None',
				amt: 0
			}
		}
	];

	drinksFactory.updateDrinks = function() {
		/*$http({
			url: 'scripts/backend/drinks.php',
			method: 'GET'
		})
			.success(function(data, status, headers, config) {
				drinksFactory.drinks = data;
			})
			.error(function(data, status, headers, config) {
				alert('An error has occured.');
			}); */
	};

	drinksFactory.getDrinks = function() {
		return drinksFactory.drinks;
	};

	return drinksFactory;
});