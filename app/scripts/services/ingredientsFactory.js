'use strict';

ABAApp.factory('IngredientsFactory', function() {
	var ingredientsFactory = {};

	ingredientsFactory.bayIngredients = [
		{
			type: "Rum",
			level: 75,
			totalOz: 25.36
		},
		{
			type: "Coke",
			level: 75,
			totalOz: 33.81
		},
		{
			type: "",
			level: 0,
			totalOz: 0
		},
		{
			type: "",
			level: 0,
			totalOz: 0
		},
		{
			type: "",
			level: 0,
			totalOz: 0
		},
		{
			type: "",
			level: 0,
			totalOz: 0
		}
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