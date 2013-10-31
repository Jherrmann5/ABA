'use strict';

ABAApp.factory('Ingredients', function() {
	var ingredientsFactory = {};

	ingredientsFactory.bayIngredients = [
		{
			type: "Rum",
			level: 50
		},
		{
			type: "Coke",
			level: 100
		},
/*		{
			type: "Gin",
			level: 80
		},
		{
			type: "Tonic",
			level: 100
		},
		{
			type: "Whiskey",
			level: 20
		},
		{
			type: "Rocks",
			level: 100
		}*/
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

	ingredientsFactory.getIngredients = function() {
		return ingredientsFactory.bayIngredients;
	}
	return ingredientsFactory;
});