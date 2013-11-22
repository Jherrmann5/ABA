'use strict';

ABAApp.factory('DrinksFactory', function() {
	var drinksFactory = {};

	drinksFactory.drinks = [
		{
			name: 'Rum & Coke',
			price: 3.50,
			ing: [
				{
					name: 'Rum',
					amt: 1
				},
				{
					name: 'Coke',
					amt: 3
				}
			],
			tabName: ''
		},
		{
			name: 'Gin & Tonic',
			price: 3.75,
			ing: [
				{
					name: 'Gin',
					amt: 1
				},
				{
					name: 'Tonic',
					amt: 3
				}
			],
			tabName: ''
		},
		{
			name: 'Rum on the Rocks',
			price: 4.25,
			ing: [
				{
					name: 'Rum',
					amt: 4
				}
			],
			tabName: ''
		},
		{
			name: 'Coke',
			price: 4.25,
			ing: [
				{
					name: 'Coke',
					amt: 4
				}
			],
			tabName: ''
		}
	];

	drinksFactory.getDrinks = function() {
		return drinksFactory.drinks;
	};

	return drinksFactory;
});
