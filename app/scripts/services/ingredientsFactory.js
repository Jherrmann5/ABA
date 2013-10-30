'use strict';

ABAApp.factory('Ingredients', function() {
	var CurrentIngredients = [
		{
			type: "Rum",
			level: 50
		},
		{
			type: "Coke",
			level: 100
		},
		{
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
		}
	];
	return {
		getIngredients: function(){
			return CurrentIngredients;
		}
	}
});