'use strict';

ABAApp.factory('Drinks', function() {
	var drinks = [
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
	return {
		getDrinks: function() {
			return drinks;
		}
	}
});