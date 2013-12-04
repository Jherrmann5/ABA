'use strict';

ABAApp.factory('DrinksFactory', function() {
	var drinksFactory = {};

	drinksFactory.drinks = [
		{
			name: 'Rum & Coke',
			price: 4.00,
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
			price: 4.50,
			ing: [
				{
					name: 'Gin',
					amt: 2
				},
				{
					name: 'Tonic',
					amt: 2
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
			price: 2.75,
			ing: [
				{
					name: 'Coke',
					amt: 4
				}
			],
			tabName: ''
		},
		{
			name: 'Tonic Water',
			price: 2.00,
			ing: [
				{
					name: 'Tonic',
					amt: 4
				}
			],
			tabName: ''
		},
		{
			name: 'Vodka Tonic',
			price: 4.00,
			ing: [
				{
					name: 'Vodka',
					amt: 2
				},
				{
					name: 'Tonic',
					amt: 2
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
