'use strict';

ABAApp.factory('IngredientsFactory', function() {
	var ingredientsFactory = {};

	ingredientsFactory.bayIngredients = [
		{
			type: "Rum",
			level: 100,
			mlVol: 750,
			bay: 1
		},
		{
			type: "Coke",
			level: 100,
			mlVol: 1000,
			bay: 2
		},
		{
			type: "Gin",
			level: 100,
			mlVol: 750,
			bay: 3
		},
		{
			type: "Bay 4",
			level: null,
			mlVol: null,
			bay: 4
		},
		{
			type: "Bay 5",
			level: null,
			mlVol: null,
			bay: 5
		},
	];
	ingredientsFactory.allIngredients = [
		{
			type: "Rum"
		},
		{
			type: "Coke"
		},
		{
			type: "Whiskey"
		},
		{
			type: "Tonic"
		},
		{
			type: "Gin"
		},
		{
			type: "Vodka"
		},
		{
			type: "Sprite"
		}
	];

	ingredientsFactory.checkLevels = function() {

	};

	return ingredientsFactory;
});